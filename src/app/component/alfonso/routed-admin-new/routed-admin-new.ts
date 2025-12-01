import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlfonsoRespuestaService } from '../../../service/alfonso-respuesta';
import { IAlfonsoRespuesta } from '../../../model/alfonso-respuesta';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-alfonso-admin-new',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './routed-admin-new.html',
  styleUrl: './routed-admin-new.css',
})
export class RoutedAlfonsoAdminNew implements OnInit {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private service = inject(AlfonsoRespuestaService);

  form!: FormGroup;
  error: string | null = null;
  submitting: boolean = false;

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group({
      autor: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(128)]],
      contenido: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(4096)]],
      publicado: [true, [Validators.required]],
    });
  }

  onSubmit(): void {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitting = true;
    const payload: Partial<IAlfonsoRespuesta> = {
      autor: this.form.value.autor,
      contenido: this.form.value.contenido,
      publicado: this.form.value.publicado,
    };

    this.service.create(payload).subscribe({
      next: () => {
        this.submitting = false;
        this.router.navigate(['/alfonso/plist']);
      },
      error: (err: HttpErrorResponse) => {
        this.submitting = false;
        this.error = 'Error al crear la respuesta';
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
