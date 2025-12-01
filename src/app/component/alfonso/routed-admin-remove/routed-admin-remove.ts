import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AlfonsoRespuestaService } from '../../../service/alfonso-respuesta';
import { IAlfonsoRespuesta } from '../../../model/alfonso-respuesta';
import { UnroutedAlfonsoAdminView } from "../unrouted-admin-view/unrouted-admin-view";

@Component({
  selector: 'app-alfonso-admin-remove',
  imports: [UnroutedAlfonsoAdminView],
  templateUrl: './routed-admin-remove.html',
  styleUrl: './routed-admin-remove.css'
})
export class RoutedAlfonsoAdminRemove implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private service = inject(AlfonsoRespuestaService);

  oRespuesta: IAlfonsoRespuesta | null = null;
  loading: boolean = true;
  error: string | null = null;
  deleting: boolean = false;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      this.error = 'ID no valido';
      this.loading = false;
      return;
    }
    this.load(+id);
  }

  load(id: number) {
    this.service.get(id).subscribe({
      next: (data: IAlfonsoRespuesta) => {
        this.oRespuesta = data;
        this.loading = false;
      },
      error: (err: HttpErrorResponse) => {
        this.error = 'Error cargando la respuesta';
        this.loading = false;
        console.error(err);
      }
    });
  }

  confirmDelete() {
    if (!this.oRespuesta) return;
    this.deleting = true;
    this.service.delete(this.oRespuesta.id).subscribe({
      next: () => {
        this.deleting = false;
        this.router.navigate(['/alfonso/plist']);
      },
      error: (err: HttpErrorResponse) => {
        this.deleting = false;
        this.error = 'Error borrando la respuesta';
        console.error(err);
      }
    });
  }

  cancel() {
    this.router.navigate(['/alfonso/plist']);
  }
}
