import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlfonsoRespuestaService } from '../../../service/alfonso-respuesta';
import { IAlfonsoRespuesta } from '../../../model/alfonso-respuesta';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-alfonso-admin-edit',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './routed-admin-edit.html',
  styleUrl: './routed-admin-edit.css',
})
export class RoutedAlfonsoAdminEdit implements OnInit {
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private service = inject(AlfonsoRespuestaService);

  form!: FormGroup;
  respuestaId: number | null = null;
  loading: boolean = true;
  error: string | null = null;
  submitting: boolean = false;

  ngOnInit(): void {
    this.initForm();
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.respuestaId = +id;
      this.load(+id);
    } else {
      this.loading = false;
      this.error = 'ID no valido';
    }
  }

  initForm(): void {
    this.form = this.fb.group({
      autor: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(128)]],
      contenido: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(4096)]],
      publicado: [true, [Validators.required]],
    });
  }

  load(id: number): void {
    this.service.get(id).subscribe({
      next: (data: IAlfonsoRespuesta) => {
        this.form.patchValue({
          autor: data.autor,
          contenido: data.contenido,
          publicado: data.publicado,
        });
        this.loading = false;
      },
      error: (err: HttpErrorResponse) => {
        this.error = 'Error al cargar la respuesta';
        this.loading = false;
        console.error(err);
      },
    });
  }

  onSubmit(): void {
    if (!this.form.valid || !this.respuestaId) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitting = true;
    const payload: Partial<IAlfonsoRespuesta> = {
      id: this.respuestaId!,
      autor: this.form.value.autor,
      contenido: this.form.value.contenido,
      publicado: this.form.value.publicado,
    };

    this.service.update(payload).subscribe({
      next: () => {
        this.submitting = false;
        this.router.navigate(['/alfonso/plist']);
      },
      error: (err: HttpErrorResponse) => {
        this.submitting = false;
        this.error = 'Error al guardar la respuesta';
        console.error(err);
      },
    });
  }

  get autor() {
    return this.form.get('autor');
  }

  get contenido() {
    return this.form.get('contenido');
  }

  get publicado() {
    return this.form.get('publicado');
  }
}
