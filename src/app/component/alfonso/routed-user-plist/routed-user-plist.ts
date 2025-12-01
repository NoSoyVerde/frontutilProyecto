import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { IPage } from '../../../model/plist';
import { IAlfonsoRespuesta } from '../../../model/alfonso-respuesta';
import { AlfonsoRespuestaService } from '../../../service/alfonso-respuesta';
import { Paginacion } from "../../shared/paginacion/paginacion";
import { UnroutedAlfonsoUserCard } from "../unrouted-user-card/unrouted-user-card";

@Component({
  selector: 'app-alfonso-user-plist',
  imports: [Paginacion, UnroutedAlfonsoUserCard],
  templateUrl: './routed-user-plist.html',
  styleUrl: './routed-user-plist.css',
})
export class RoutedAlfonsoUserPlist {
  oPage: IPage<IAlfonsoRespuesta> | null = null;
  numPage: number = 0;
  numRpp: number = 6;

  constructor(private oService: AlfonsoRespuestaService) { }

  ngOnInit() {
    this.getPage();
  }

  getPage() {
    this.oService.getPage(this.numPage, this.numRpp, 'fechaCreacion', 'desc').subscribe({
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
}
