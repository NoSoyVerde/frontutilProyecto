import { Component, OnInit, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AlfonsoRespuestaService } from '../../../service/alfonso-respuesta';
import { IAlfonsoRespuesta } from '../../../model/alfonso-respuesta';
import { DatetimePipe } from "../../../pipe/datetime-pipe";

@Component({
  selector: 'app-alfonso-user-view',
  imports: [DatetimePipe, NgClass],
  templateUrl: './routed-user-view.html',
  styleUrl: './routed-user-view.css',
})
export class RoutedAlfonsoUserView implements OnInit {
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
        this.error = 'No se pudo cargar la respuesta';
        this.loading = false;
        console.error(err);
      }
    });
  }
}
