import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FernandezIdeaService } from '../../../service/fernandez-idea.service';
import { IFernandezIdea } from '../../../model/fernandez-idea';
import { HttpErrorResponse } from '@angular/common/http';
import { debug } from '../../../environment/environment';

@Component({
    selector: 'app-fernandez-routed-admin-edit',
    imports: [ReactiveFormsModule, RouterLink],
    templateUrl: './routed-admin-edit.html',
    styleUrl: './routed-admin-edit.css',
})
export class FernandezRoutedAdminEdit implements OnInit {
    private readonly fb = inject(FormBuilder);
    private readonly route = inject(ActivatedRoute);
    private readonly router = inject(Router);
    private readonly ideaService = inject(FernandezIdeaService);

    ideaForm!: FormGroup;
    ideaId: number | null = null;
    loading: boolean = true;
    error: string | null = null;
    submitting: boolean = false;
    formDirty: boolean = false;

    ngOnInit(): void {
        this.initForm();
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.ideaId = +id;
            this.loadIdea(+id);
        } else {
            this.loading = false;
            this.error = 'ID de idea no válido';
        }
        
        // Track form changes for canDeactivate guard
        this.ideaForm.statusChanges.subscribe(() => {
            this.formDirty = this.ideaForm.dirty;
        });
    }

    initForm(): void {
        this.ideaForm = this.fb.group({
            titulo: ['', [
                Validators.required,
                Validators.minLength(1),
                Validators.maxLength(255)]],
            comentario: ['', [
                Validators.required,
                Validators.minLength(1)]],
            categoria: ['IDEA', [Validators.required]],
            publico: [true, [Validators.required]],
        });
    }

    loadIdea(id: number): void {
        this.ideaService.get(id).subscribe({
            next: (idea: IFernandezIdea) => {
                this.ideaForm.patchValue({
                    titulo: idea.titulo,
                    comentario: idea.comentario,
                    categoria: idea.categoria,
                    publico: idea.publico,
                });
                this.loading = false;
            },
            error: (err: HttpErrorResponse) => {
                this.error = 'Error al cargar la idea';
                this.loading = false;
                if (debug) console.error(err);
            },
        });
    }

    onSubmit(): void {
        if (!this.ideaForm.valid || !this.ideaId) {
            this.ideaForm.markAllAsTouched();
            return;
        }

        this.submitting = true;
        const payload: Partial<IFernandezIdea> = {
            id: this.ideaId!,
            titulo: this.ideaForm.value.titulo,
            comentario: this.ideaForm.value.comentario,
            categoria: this.ideaForm.value.categoria,
            publico: this.ideaForm.value.publico
        };

        this.ideaService.update(payload).subscribe({
            next: () => {
                this.submitting = false;
                this.formDirty = false;
                this.router.navigate(['/fernandez-idea/admin/plist']);
            },
            error: (err: HttpErrorResponse) => {
                this.submitting = false;
                this.error = 'Error al guardar la idea';
                if (debug) console.error(err);
            },
        });
    }

    get titulo() {
        return this.ideaForm.get('titulo');
    }

    get comentario() {
        return this.ideaForm.get('comentario');
    }

    get categoria() {
        return this.ideaForm.get('categoria');
    }

    get publico() {
        return this.ideaForm.get('publico');
    }
}
