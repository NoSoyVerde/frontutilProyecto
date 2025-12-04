import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FernandezIdeaService } from '../../../service/fernandez-idea.service';
import { IFernandezIdea } from '../../../model/fernandez-idea';
import { HttpErrorResponse } from '@angular/common/http';
import { FernandezUnroutedAdminView } from "../unrouted-admin-view/unrouted-admin-view";
import { debug } from '../../../environment/environment';

@Component({
  selector: 'app-fernandez-routed-admin-remove',
  imports: [FernandezUnroutedAdminView],
  templateUrl: './routed-admin-remove.html',
  styleUrl: './routed-admin-remove.css'
})
export class FernandezRoutedAdminRemove implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly ideaService = inject(FernandezIdeaService);

  oIdea: IFernandezIdea | null = null;
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
    this.ideaService.get(id).subscribe({
      next: (data: IFernandezIdea) => {
        this.oIdea = data;
        this.loading = false;
      },
      error: (err: HttpErrorResponse) => {
        this.error = 'Error cargando la idea';
        this.loading = false;
        if (debug) console.error('Error loading idea for removal:', err);
      }
    });
  }

  confirmDelete() {
    if (!this.oIdea) return;
    this.deleting = true;
    this.ideaService.delete(this.oIdea.id).subscribe({
      next: () => {
        this.deleting = false;
        this.router.navigate(['/fernandez-idea/admin/plist']);
      },
      error: (err: HttpErrorResponse) => {
        this.deleting = false;
        this.error = 'Error borrando la idea';
        if (debug) console.error('Error deleting idea:', err);
      }
    });
  }

  cancel() {
    this.router.navigate(['/fernandez-idea/admin/plist']);
  }
}
