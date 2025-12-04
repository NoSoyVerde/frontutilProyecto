import { Component, inject } from '@angular/core';
import { IFernandezIdea } from '../../../model/fernandez-idea';
import { FernandezIdeaService } from '../../../service/fernandez-idea.service';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { FernandezUnroutedAdminView } from "../unrouted-admin-view/unrouted-admin-view";
import { debug } from '../../../environment/environment';

@Component({
  selector: 'app-fernandez-routed-admin-view',
  imports: [FernandezUnroutedAdminView],
  templateUrl: './routed-admin-view.html',
  styleUrl: './routed-admin-view.css',
})
export class FernandezRoutedAdminView {
  private readonly oIdeaService = inject(FernandezIdeaService);
  private readonly route = inject(ActivatedRoute);
  
  oIdea: IFernandezIdea | null = null;

  constructor() {
    // Obtener el ID de la idea desde la ruta
    const idParam = this.route.snapshot.paramMap.get('id');
    const ideaId = idParam ? Number(idParam) : NaN;
    if (isNaN(ideaId)) {
      if (debug) console.error('Invalid idea id:', idParam);
      return;
    }
    this.getIdea(ideaId);
  }

  ngOnInit() { }

  getIdea(ideaId: number) {
    this.oIdeaService.get(ideaId).subscribe({
      next: (data: IFernandezIdea) => {
        this.oIdea = data;
      },
      error: (error: HttpErrorResponse) => {
        if (debug) console.error('Error fetching idea:', error);
      },
    });
  }
}
