import { Component } from '@angular/core';
import { TablePaginationComponent } from '@shared/components/table-navigation/table-pagination.component';
import { TableComponent } from '@shared/components/table/table.component';
import { tableHeader } from '@shared/constants/category.constants';
import { IPagination } from '@shared/interfaces/pagination.interface';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [TableComponent, TablePaginationComponent],
  templateUrl: './category.page.html',
  styleUrl: './category.page.css'
})
export class CategoryPage {
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
