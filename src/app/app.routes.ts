import { Routes } from '@angular/router';
import { MainPageBody } from '@page/home/main/main.page-body';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('@page/auth/auth.routes').then(r => r.AuthRoutes)
  },
  {
    path: '',
    component: MainPageBody,
    loadChildren: () => import('@page/home/home.routes').then(r => r.HomeRoutes)
  }
];
