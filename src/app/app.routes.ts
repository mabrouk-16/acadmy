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
      {
        path: 'courses-details',
        loadComponent: () =>
          import('./pages/courses-details/courses-details.component').then(
            (m) => m.CoursesDetailsComponent
          ),
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./pages/about-page/about-page.component').then(
            (m) => m.AboutPageComponent
          ),
      },
    ],
  },
];
