import { Component, inject } from '@angular/core';
import { ProductService } from '@core/services/product.service';
import { TablePaginationComponent } from '@shared/components/table-navigation/table-pagination.component';
import { TableComponent } from '@shared/components/table/table.component';
import { tableHeader } from '@shared/constants/product.constants';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [TableComponent, TablePaginationComponent],
  templateUrl: './product.page.html',
  styleUrl: './product.page.css'
})
export class ProductPage {
  public productService = inject(ProductService);

  public tableHeader = tableHeader;
  public products = this.productService.products;
  public pagination = this.productService.pagination;

  ngOnInit() {
    this.getProducts();
  }

  getProducts(page: number = 1) {
    this.productService.getProducts(page).subscribe();
  }
}
