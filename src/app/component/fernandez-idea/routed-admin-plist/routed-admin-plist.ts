import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { IPage } from '../../../model/plist';
import { IFernandezIdea } from '../../../model/fernandez-idea';
import { FernandezIdeaService } from '../../../service/fernandez-idea.service';
import { Paginacion } from "../../shared/paginacion/paginacion";
import { BotoneraRpp } from "../../shared/botonera-rpp/botonera-rpp";
import { debug } from '../../../environment/environment';

@Component({
  selector: 'app-fernandez-routed-admin-plist',
  imports: [RouterLink, Paginacion, BotoneraRpp],
  templateUrl: './routed-admin-plist.html',
  styleUrl: './routed-admin-plist.css',
})
export class FernandezRoutedAdminPlist {
  private readonly oIdeaService = inject(FernandezIdeaService);
  
  oPage: IPage<IFernandezIdea> | null = null;
  numPage: number = 0;
  numRpp: number = 5;
  // Search / filter / sort for admin (admin can see all)
  searchTerm: string = '';
  categoriaFilter: string = 'ALL';
  orderField: string = 'fechaCreacion';
  orderDirection: string = 'desc';
  private searchTimer: any = null;
  // Store all ideas locally for client-side filtering
  private allIdeas: IFernandezIdea[] = [];
  // Bulk creation UI state
  showBulkWarning: boolean = false;
  pendingBulkAmount: number | null = null;
  // Loading indicator for bulk creation
  isBulkLoading: boolean = false;

  ngOnInit() {
    this.loadAllIdeas();
  }

  /**
   * Load all ideas once from the server (no pagination, no filtering)
   */
  private loadAllIdeas() {
    // Request page 0 with huge size to get all ideas at once
    this.oIdeaService.getPage(0, 10000, 'id', 'asc', undefined, undefined, 'ALL').subscribe({
      next: (data: IPage<IFernandezIdea>) => {
        this.allIdeas = data.content || [];
        if (debug) console.debug(`Loaded ${this.allIdeas.length} ideas from server`);
        this.applyFiltersAndDisplay();
      },
      error: (error: HttpErrorResponse) => {
        if (debug) console.error('Error loading ideas:', error);
      },
    });
  }

  /**
   * Apply search, filter, and sort to allIdeas and display current page
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
      if (debug) console.debug(`Search: "${this.searchTerm}" found ${filtered.length} items`);
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
  
    /**
     * Request bulk creation. If amount is high, show a warning card for confirmation.
     */
    // Threshold for showing the bulk warning card
    private readonly BULK_WARNING_THRESHOLD = 500;

    requestBulkCreate(amount: number = 20) {
      if (!amount || amount < 1) return;
      if (amount > this.BULK_WARNING_THRESHOLD) {
        this.pendingBulkAmount = amount;
        this.showBulkWarning = true;
        return;
      }
      this.bulkCreateIdeas(amount);
    }

    /**
     * Execute the bulk creation (called after confirmation when needed)
     */
    bulkCreateIdeas(amount: number = 20) {
      // reset any pending warning
      this.showBulkWarning = false;
      this.pendingBulkAmount = null;
      // show loading pop-up until backend finishes inserting
      this.isBulkLoading = true;
      this.oIdeaService.bulkCreate(amount).subscribe({
        next: () => {
          this.isBulkLoading = false;
          this.getPage();
        },
        error: (error: HttpErrorResponse) => {
          this.isBulkLoading = false;
          if (debug) console.error('Error bulk creating ideas:', error);
          alert('Error al crear ideas fake');
        },
      });
    }

    cancelBulkCreate() {
      this.showBulkWarning = false;
      this.pendingBulkAmount = null;
    }
}
