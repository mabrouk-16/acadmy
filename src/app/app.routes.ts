import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./app.component').then((m) => m.AppComponent),
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadComponent: () =>
          import('./pages/home/home-page.component').then(
            (m) => m.HomePageComponent
          ),
      },
      {
        path: 'courses',
        loadComponent: () =>
          import('./pages/courses/courses.component').then(
            (m) => m.CoursesComponent
          ),
      },
    ],
  },
];
