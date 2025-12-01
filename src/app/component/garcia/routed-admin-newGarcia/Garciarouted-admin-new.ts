import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { GarciaService } from '../../../service/garcia/garcia';
import { IGarcia } from '../../../model/garcia/garcia';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-Garciarouted-admin-new',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './Garciarouted-admin-new.html',
  styleUrl: './Garciarouted-admin-new.css',
})
export class RoutedAdminNewGarcia implements OnInit {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private garciaService = inject(GarciaService);

  garciaForm!: FormGroup;
  error: string | null = null;
  submitting: boolean = false;

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.garciaForm = this.fb.group({
      titulo: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(1024)
      ]],
      objetivo: ['', [
        Validators.required,
        Validators.minLength(3),
      ]],
      progreso: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(1024)
      ]],
      fechaFinal: ['', [
        Validators.required
      ]],
    });
  }

  onSubmit(): void {
    if (!this.garciaForm.valid) {
      this.garciaForm.markAllAsTouched();
      return;
    }

    this.submitting = true;
    const payload: Partial<IGarcia> = {
      titulo: this.garciaForm.value.titulo,
      objetivo: this.garciaForm.value.objetivo,
      progreso: this.garciaForm.value.progreso,
      fechaFinal: this.garciaForm.value.fechaFinal,
    };

    this.garciaService.create(payload).subscribe({
      next: () => {
        this.submitting = false;
        this.router.navigate(['/garcia/plist']);
      },
      error: (err: HttpErrorResponse) => {
        this.submitting = false;
        this.error = 'Error al crear el post';
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