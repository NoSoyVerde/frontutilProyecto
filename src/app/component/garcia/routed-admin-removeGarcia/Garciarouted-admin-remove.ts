import { Component, inject, OnInit } from '@angular/core';
import { UnroutedAdminViewGarcia } from '../unrouted-admin-viewGarcia/Garciaunrouted-admin-view';
import { ActivatedRoute, Router } from '@angular/router';
import { GarciaService } from '../../../service/garcia/garcia';
import { IGarcia } from '../../../model/garcia/garcia';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-Garciarouted-admin-remove',
  imports: [UnroutedAdminViewGarcia],
  templateUrl: './Garciarouted-admin-remove.html',
  styleUrl: './Garciarouted-admin-remove.css',
})
export class RoutedAdminRemoveGarcia implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private garciaService = inject(GarciaService);

  oGarcia: IGarcia | null = null;
  loading: boolean = true;
  error: string | null = null;
  deleting: boolean = false;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      this.error = 'ID no válido';
      this.loading = false;
      return;
    }
    this.load(+id);
  }

  load(id: number) {
    this.garciaService.get(id).subscribe({
      next: (data: IGarcia) => {
        this.oGarcia = data;
        this.loading = false;
      },
      error: (err: HttpErrorResponse) => {
        this.error = 'Error cargando el post';
        this.loading = false;
        console.error(err);
      }
    });
  }

  confirmDelete() {
    if (!this.oGarcia) return;
    this.deleting = true;
    this.garciaService.delete(this.oGarcia.id).subscribe({
      next: () => {
        this.deleting = false;
        this.router.navigate(['/garcia/plist']);
      },
      error: (err: HttpErrorResponse) => {
        this.deleting = false;
        this.error = 'Error borrando el post';
        console.error(err);
      }
    });
  }

  cancel() {
    this.router.navigate(['/garcia/plist']);
  }
}
