import { HttpClient } from '@angular/common/http';
import { Injectable, computed, signal } from '@angular/core';
import { tap } from 'rxjs';

import { environment } from '../../../environments/environment';
import { BasePaginationResponse } from '@core/models/base-pagination-response.model';
import { CategoryResponse } from '@core/models/category/category-response.model';
import { generatePagination } from '@shared/utils/pagination.util';

let initialState: BasePaginationResponse<CategoryResponse> = {
  data: [],
  pagination: {
    totalPages: 1,
    limit: 1,
    page: 1,
    totalItems: 1,
    next: null,
    previous: null,
  },
};

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private readonly URL = environment.ENDPOINTS.BASE_URL;
  public categoriesState = signal(initialState);
  // public selectedCategory = signal<CategoryResponse | undefined>(undefined);

  constructor(private http: HttpClient) {}

  get categories() {
    return computed(() => this.categoriesState().data);
  }

  get pagination() {
    return computed(() =>
      generatePagination(this.categoriesState().pagination)
    );
  }

  getCategories(page: number = 1) {
    return this.http
      .get<BasePaginationResponse<CategoryResponse>>(
        `${this.URL}/category?page=${page}`
      )
      .pipe(
        tap((res) => {
          this.categoriesState.set(res);
        })
      );
  }

  deleteById(id: number) {
    return this.http
      .delete(`${this.URL}/category/${id}`)
      .pipe(tap(() => this.getCategories()));
  }

  // selectCategory(id: number) {
  //   let category = this.categories().find((category) => category.id === id);
  //   this.selectedCategory.set(category);
  //   return this.selectedCategory;
  // }

  selectCategory(id: number) {
    return computed(() =>
      this.categories().find((category) => category.id === id)
    );
  }
}
