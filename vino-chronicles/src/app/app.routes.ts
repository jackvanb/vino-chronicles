import { Routes } from '@angular/router';
import { LandingComponent } from '../pages/landing/landing.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LandingComponent,
  },
];
