import { Routes } from '@angular/router';
import { DashboardPage } from './dashboard/dashboard.page';

export const HomeRoutes: Routes = [
  {
    path: '',
    component: DashboardPage
  },
  {
    path: '**',
    redirectTo: '/'
  }
];
