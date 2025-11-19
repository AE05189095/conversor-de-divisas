import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'conversor',
    pathMatch: 'full',
  },
  {
    path: 'conversor',
    loadComponent: () => import('./conversor/tab1.page').then(m => m.Tab1Page)
  },
];

