import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IPage } from '../../../model/plist';
import { IFernandezIdea } from '../../../model/fernandez-idea';
import { FernandezIdeaService } from '../../../service/fernandez-idea.service';
import { Paginacion } from "../../shared/paginacion/paginacion";
import { FernandezUnroutedUserView } from "../unrouted-user-view/unrouted-user-view";
import { BotoneraRpp } from "../../shared/botonera-rpp/botonera-rpp";
import { debug } from '../../../environment/environment';

@Component({
  selector: 'app-fernandez-routed-user-plist',
  imports: [RouterLink, Paginacion, FernandezUnroutedUserView, BotoneraRpp],
  templateUrl: './routed-user-plist.html',
  styleUrl: './routed-user-plist.css',
})
export class FernandezRoutedUserPlist {
  private readonly oIdeaService = inject(FernandezIdeaService);
  
  oPage: IPage<IFernandezIdea> | null = null;
  numPage: number = 0;
  numRpp: number = 5;
  // Search / filter / sort
  searchTerm: string = '';
  categoriaFilter: string = 'ALL';
  orderField: string = 'fechaCreacion';
  orderDirection: string = 'desc';
  private searchTimer: any = null;
  // Store all public ideas locally for client-side filtering
  private allIdeas: IFernandezIdea[] = [];

  ngOnInit() {
    this.loadAllIdeas();
  }

  /**
   * Load all public ideas once from the server
   */
  private loadAllIdeas() {
    // Request page 0 with huge size to get all public ideas at once
    this.oIdeaService.getPage(0, 10000, 'id', 'asc', true, undefined, 'ALL').subscribe({
      next: (data: IPage<IFernandezIdea>) => {
        this.allIdeas = data.content || [];
        if (debug) console.debug(`Loaded ${this.allIdeas.length} public ideas from server`);
        this.applyFiltersAndDisplay();
      },
      error: (error: HttpErrorResponse) => {
        if (debug) console.error('Error loading ideas:', error);
      },
    });
  }

  /**
   * Apply search and filter to allIdeas and display current page
   */
  private applyFiltersAndDisplay() {
    let filtered = [...this.allIdeas];

    // Apply search filter
    if (this.searchTerm && this.searchTerm.trim() !== '') {
      const q = this.searchTerm.toLowerCase();
      filtered = filtered.filter(i => {
        const title = (i.titulo || '').toLowerCase();
        const desc = (i.comentario || '').toLowerCase();
        return title.includes(q) || desc.includes(q);
      });
      if (debug) console.debug(`User search: "${this.searchTerm}" found ${filtered.length} items`);
    }

    // Apply categoria filter
    if (this.categoriaFilter && this.categoriaFilter !== 'ALL') {
      filtered = filtered.filter(i => i.categoria === this.categoriaFilter);
    }

    // Build paginated result
    const totalElements = filtered.length;
    const totalPages = Math.max(1, Math.ceil(totalElements / this.numRpp));
    const start = this.numPage * this.numRpp;
    const pageContent = filtered.slice(start, start + this.numRpp);

    this.oPage = {
      content: pageContent,
      totalElements: totalElements,
      totalPages: totalPages,
      size: this.numRpp,
      number: this.numPage,
      numberOfElements: pageContent.length,
      first: this.numPage === 0,
      last: this.numPage === totalPages - 1,
      empty: pageContent.length === 0,
      pageable: {
        pageNumber: this.numPage,
        pageSize: this.numRpp,
        sort: { sorted: false, unsorted: true, empty: true },
        offset: start,
        paged: true,
        unpaged: false,
      },
      sort: { sorted: false, unsorted: true, empty: true },
    };

    // If current page is out of range, adjust
    if (this.numPage > 0 && this.numPage >= totalPages) {
      this.numPage = Math.max(0, totalPages - 1);
      this.applyFiltersAndDisplay();
    }
  }

  getPage() {
    this.applyFiltersAndDisplay();
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

  onSearch(term: string) {
    this.searchTerm = term ? term.trim() : '';
    this.numPage = 0;
    // debounce to avoid spamming requests while typing
    if (this.searchTimer) {
      clearTimeout(this.searchTimer);
    }
    this.searchTimer = setTimeout(() => {
      this.getPage();
    }, 350);
    return false;
  }

  /**
   * Execute search immediately (used for Enter key)
   */
  onSearchImmediate(term: string) {
    this.searchTerm = term ? term.trim() : '';
    this.numPage = 0;
    if (this.searchTimer) {
      clearTimeout(this.searchTimer);
      this.searchTimer = null;
    }
    this.getPage();
    return false;
  }

  onCategoriaChange(cat: string) {
    this.categoriaFilter = cat || 'ALL';
    this.numPage = 0;
    this.getPage();
    return false;
  }

  onOrderChange(field: string) {
    this.orderField = field || 'fechaCreacion';
    this.numPage = 0;
    this.getPage();
    return false;
  }

  toggleDirection() {
    this.orderDirection = this.orderDirection === 'asc' ? 'desc' : 'asc';
    this.numPage = 0;
    this.getPage();
    return false;
  }
}
