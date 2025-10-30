import {RenderMode, ServerRoute} from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Client
  },
  {
    path: 'notFound',
    renderMode: RenderMode.Client,
    status: 404,
  }
];
