import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home-page.component').then(
        (m) => m.HomePageComponent
      ),
    children: [
      // { path: '', redirectTo: 'home', pathMatch: 'full' },
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
      {
        path: 'signup',
        loadComponent: () =>
          import('./auth/register/register.component').then(
            (m) => m.RegisterComponent
          ),
      },
      {
        path: 'login',
        loadComponent: () =>
          import('./auth/login/login.component').then((m) => m.LoginComponent),
      },
    ],
  },
];
