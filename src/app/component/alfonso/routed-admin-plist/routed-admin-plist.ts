import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { IPage } from '../../../model/plist';
import { IAlfonsoRespuesta } from '../../../model/alfonso-respuesta';
import { AlfonsoRespuestaService } from '../../../service/alfonso-respuesta';
import { Paginacion } from "../../shared/paginacion/paginacion";
import { BotoneraRpp } from "../../shared/botonera-rpp/botonera-rpp";
import { DatetimePipe } from "../../../pipe/datetime-pipe";

@Component({
  selector: 'app-alfonso-admin-plist',
  imports: [RouterLink, Paginacion, BotoneraRpp, DatetimePipe, NgClass],
  templateUrl: './routed-admin-plist.html',
  styleUrl: './routed-admin-plist.css',
})
export class RoutedAlfonsoAdminPlist {
  oPage: IPage<IAlfonsoRespuesta> | null = null;
  numPage: number = 0;
  numRpp: number = 5;
  order: string = 'id';
  direction: string = 'desc';
  rellenaCantidad: number = 20;
  rellenando: boolean = false;
  rellenaOk: number | null = null;
  rellenaError: string | null = null;

  constructor(private oService: AlfonsoRespuestaService) { }

  ngOnInit() {
    this.getPage();
  }

  getPage() {
    this.oService.getPage(this.numPage, this.numRpp, this.order, this.direction).subscribe({
      next: (data: IPage<IAlfonsoRespuesta>) => {
        this.oPage = data;
        if (this.numPage > 0 && this.numPage >= data.totalPages) {
          this.numPage = data.totalPages - 1;
          this.getPage();
        }
      },
      error: (error: HttpErrorResponse) => {
        console.error(error);
      },
    });
  }

  goToPage(numPage: number) {
    this.numPage = numPage;
    this.getPage();
    return false;
  }

  onRppChange(n: number) {
    this.numRpp = n;
    this.getPage();
    return false;
  }

  toggleOrder(field: string) {
    if (this.order === field) {
      this.direction = this.direction === 'asc' ? 'desc' : 'asc';
    } else {
      this.order = field;
      this.direction = 'asc';
    }
    this.getPage();
    return false;
  }

  onCantidadChange(value: string) {
    this.rellenaCantidad = +value;
    return false;
  }

  generarFake() {
    this.rellenaOk = null;
    this.rellenaError = null;
    this.rellenando = true;
    this.oService.rellena(this.rellenaCantidad).subscribe({
      next: (count: number) => {
        this.rellenando = false;
        this.rellenaOk = count;
        this.getPage();
      },
      error: (err: HttpErrorResponse) => {
        this.rellenando = false;
        this.rellenaError = 'Error generando datos fake';
        console.error(err);
      }
    });
  }
}
