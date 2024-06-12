import { Routes } from '@angular/router';
import { DashboardPage } from './dashboard/dashboard.page';
import { CategoryPage } from './category/category.page';
import { ProductPage } from './product/product.page';

export const HomeRoutes: Routes = [
  {
    path: '',
    component: DashboardPage
  },
  {
    path: 'category',
    component: CategoryPage
  },
  {
    path: 'product',
    component: ProductPage
  },
  {
    path: '**',
    redirectTo: '/'
  }
];
