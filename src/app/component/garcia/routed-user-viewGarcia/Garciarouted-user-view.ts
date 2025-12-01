import { Component } from '@angular/core';
import { IGarcia } from '../../../model/garcia/garcia';
import { GarciaService } from '../../../service/garcia/garcia';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { UnroutedUserViewGarcia } from "../unrouted-user-viewGarcia/Garciaunrouted-user-view";

@Component({
  selector: 'app-Garciarouted-user-view',
  imports: [UnroutedUserViewGarcia],
  templateUrl: './Garciarouted-user-view.html',
  styleUrls: ['./Garciarouted-user-view.css'],
})
export class RoutedUserViewGarcia {
  oGarcia: IGarcia | null = null;

  constructor(private oGarciaService: GarciaService, private route: ActivatedRoute) {
    // Obtener el ID del blog desde la ruta
    const idParam = this.route.snapshot.paramMap.get('id');
    const blogId = idParam ? Number(idParam) : NaN;
    if (isNaN(blogId)) {
      console.error('Invalid blog id:', idParam);
      return;
    }
    this.getBlog(blogId);
  }

  ngOnInit() { }

  getBlog(blogId: number) {
    this.oGarciaService.get(blogId).subscribe({
      next: (data: IGarcia) => {
        this.oGarcia = data;
      },
      error: (error: HttpErrorResponse) => {
        console.error('Error fetching blog:', error);
      },
    });
  }
}
