import { Component } from '@angular/core';
import { TablePaginationComponent } from '@shared/components/table-navigation/table-pagination.component';
import { TableComponent } from '@shared/components/table/table.component';
import { tableHeader } from '@shared/constants/product.constants';
import { IPagination } from '@shared/interfaces/pagination.interface';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [TableComponent, TablePaginationComponent],
  templateUrl: './product.page.html',
  styleUrl: './product.page.css'
})
export class ProductPage {
  public tableHeader = tableHeader;
  public pagination: IPagination = {
    totalPages: 10,
    limit: 10,
    page: 1,
    totalItems: 28,
    next: 2,
    previous: null
  }

  getCategories(page: number) {
    console.log("page", page);
  }
}
