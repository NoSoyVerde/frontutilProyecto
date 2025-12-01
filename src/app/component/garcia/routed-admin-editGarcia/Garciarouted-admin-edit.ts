import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { GarciaService } from '../../../service/garcia/garcia';
import { IGarcia } from '../../../model/garcia/garcia';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-Garciarouted-admin-edit',
    imports: [ReactiveFormsModule, RouterLink],
    templateUrl: './Garciarouted-admin-edit.html',
    styleUrl: './Garciarouted-admin-edit.css',
})
export class RoutedAdminEditGarcia {
    private fb = inject(FormBuilder);
    private route = inject(ActivatedRoute);
    private router = inject(Router);
    private garciaService = inject(GarciaService);

    garciaForm!: FormGroup;
    garciaId: number | null = null;
    loading: boolean = true;
    error: string | null = null;
    submitting: boolean = false;
    private originalGarcia: IGarcia | null = null;

    ngOnInit(): void {
        this.initForm();
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.garciaId = +id;
            this.loadGarcia(+id);
        } else {
            this.loading = false;
            this.error = 'ID de post no válido';
        }
    }

    initForm(): void {
        this.garciaForm = this.fb.group({
            titulo: ['', [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(200)]],
            objetivo: ['', [
                Validators.required,
                Validators.minLength(10)]],
            progreso: ['', [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(1024)]],
            fechaFinal: ['', [Validators.required]],
        });
    }

    loadGarcia(id: number): void {
        this.garciaService.get(id).subscribe({
            next: (garcia: IGarcia) => {
                this.originalGarcia = garcia;

                let fechaFinalFormatted = '';
                if (garcia.fechaFinal) {
                    fechaFinalFormatted = garcia.fechaFinal.split(' ')[0];
                }

                this.garciaForm.patchValue({
                    titulo: garcia.titulo,
                    objetivo: garcia.objetivo,
                    progreso: garcia.progreso,
                    fechaFinal: fechaFinalFormatted,
                });
                this.loading = false;
            },
            error: (err: HttpErrorResponse) => {
                this.error = 'Error al cargar el post';
                this.loading = false;
                console.error(err);
            },
        });
    }

    onSubmit(): void {
        if (!this.garciaForm.valid || !this.garciaId) {
            this.garciaForm.markAllAsTouched();
            return;
        }

        this.submitting = true;
        const payload: Partial<IGarcia> = {
            id: this.garciaId!,
            titulo: this.garciaForm.value.titulo,
            objetivo: this.garciaForm.value.objetivo,
            progreso: this.garciaForm.value.progreso,
            fechaFinal: this.garciaForm.value.fechaFinal,
        };

        this.garciaService.update(payload).subscribe({
            next: () => {
                this.submitting = false;
                this.router.navigate(['/garcia/plist']);
            },
            error: (err: HttpErrorResponse) => {
                this.submitting = false;
                this.error = 'Error al guardar el post';
                console.error(err);
            },
        });
    }

    get titulo() {
        return this.garciaForm.get('titulo');
    }

    get objetivo() {
        return this.garciaForm.get('objetivo');
    }

    get progreso() {
        return this.garciaForm.get('progreso');
    }

    get fechaFinal() {
        return this.garciaForm.get('fechaFinal');
    }
}