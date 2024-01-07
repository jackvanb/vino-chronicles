import { Routes } from '@angular/router';
import { LandingComponent } from '../pages/landing/landing.component';
import { CreateListComponent } from '../pages/create-list/create-list.component';

export const routes: Routes = [
  {
    path: 'create',
    component: CreateListComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    component: LandingComponent,
  },
];
