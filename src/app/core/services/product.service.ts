import { computed, Injectable, signal } from '@angular/core';
import { tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { BasePaginationResponse } from '@core/models/base-pagination-response.model';
import { ProductResponse } from '@core/models/product/product-response.model';
import { generatePagination } from '@shared/utils/pagination.util';


let initialState: BasePaginationResponse<ProductResponse> = {
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
  providedIn: 'root'
})
export class ProductService {
  private readonly URL = environment.ENDPOINTS.BASE_URL;
  public productsState = signal(initialState);

  constructor(private http: HttpClient) { }

  getProducts(page: number = 1) {
    return this.http
      .get<BasePaginationResponse<ProductResponse>>(
        `${this.URL}/product?page=${page}`
      )
      .pipe(
        tap((res) => {
          console.log('PRODUCT', res);
          this.productsState.set(res);
        })
      );
  }

  get products() {
    return computed(() => this.productsState().data);
  }

  get pagination() {
    return computed(() => generatePagination(this.productsState().pagination));
  }
}
