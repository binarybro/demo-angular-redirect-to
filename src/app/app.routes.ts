import {Routes} from '@angular/router';
import {NotFoundComponent} from './component/not-found.component';

export const routes: Routes = [
  {
    path: 'string',
    redirectTo: 'notFound', // expect: 302, indeed returns 302 (redirect)
  },
  {
    path: 'fn',
    redirectTo: () => 'notFound', // expect: 302, but returns 200.
  },
  {
    path: 'notFound',
    loadComponent: () => NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: 'notFound',
  },
];
