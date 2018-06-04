import {Routes} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/landing'
  },
  {
    path: 'landing',
    loadChildren: `app/landing/landing.module#LandingModule`,
    data: {
      title: 'landing'
    }
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];
