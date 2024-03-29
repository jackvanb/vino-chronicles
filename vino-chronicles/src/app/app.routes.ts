import { Routes } from '@angular/router';

import { LandingComponent } from './pages/landing/landing.component';
import { CreateEventComponent } from './pages/create-event/create-event.component';
import { ViewEventComponent } from './pages/view-event/view-event.component';

export const routes: Routes = [
  {
    path: 'create',
    component: CreateEventComponent,
  },
  {
    path: 'event/:id',
    component: ViewEventComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    component: LandingComponent,
  },
];
