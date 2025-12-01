import { Component } from '@angular/core';
import { UnroutedAdminViewGarcia } from '../unrouted-admin-viewGarcia/Garciaunrouted-admin-view';
import { IGarcia } from '../../../model/garcia/garcia';
import { GarciaService } from '../../../service/garcia/garcia';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-Garciarouted-admin-view',
  imports: [UnroutedAdminViewGarcia],
  templateUrl: './Garciarouted-admin-view.html',
  styleUrl: './Garciarouted-admin-view.css',
})
export class RoutedAdminViewGarcia {
  oGarcia: IGarcia | null = null;

  constructor(private oGarciaService: GarciaService, private route: ActivatedRoute) {
    // Obtener el ID del garcia desde la ruta
    const idParam = this.route.snapshot.paramMap.get('id');
    const garciaId = idParam ? Number(idParam) : NaN;
    if (isNaN(garciaId)) {
      console.error('Invalid garcia id:', idParam);
      return;
    }
    this.getgarcia(garciaId);
  }

  ngOnInit() { }

  getgarcia(garciaId: number) {
    this.oGarciaService.get(garciaId).subscribe({
      next: (data: IGarcia) => {
        this.oGarcia = data;
      },
      error: (error: HttpErrorResponse) => {
        console.error('Error fetching garcia:', error);
      },
    });
  }
}
