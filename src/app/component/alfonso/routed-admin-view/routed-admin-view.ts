import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AlfonsoRespuestaService } from '../../../service/alfonso-respuesta';
import { IAlfonsoRespuesta } from '../../../model/alfonso-respuesta';
import { UnroutedAlfonsoAdminView } from "../unrouted-admin-view/unrouted-admin-view";

@Component({
  selector: 'app-alfonso-admin-view',
  imports: [UnroutedAlfonsoAdminView],
  templateUrl: './routed-admin-view.html',
  styleUrl: './routed-admin-view.css',
})
export class RoutedAlfonsoAdminView implements OnInit {
  private route = inject(ActivatedRoute);
  private service = inject(AlfonsoRespuestaService);

  oRespuesta: IAlfonsoRespuesta | null = null;
  loading: boolean = true;
  error: string | null = null;

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
}
