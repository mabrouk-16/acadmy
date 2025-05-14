import { Routes } from '@angular/router';
import { PagesComponent } from './pages/pages/pages.component';
import { UrlsNames } from '../shared-models';
export const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: `${UrlsNames.home}`, pathMatch: 'full' },
      {
        path: `${UrlsNames.home}`,
        loadComponent: () =>
          import('./pages/home/home-page.component').then(
            (m) => m.HomePageComponent
          ),
      },
      {
        path: `${UrlsNames.courses}`,
        loadComponent: () =>
          import('./pages/courses/courses.component').then(
            (m) => m.CoursesComponent
          ),
      },
      {
        path: `${UrlsNames.coursesDetails}`,
        loadComponent: () =>
          import('./pages/courses-details/courses-details.component').then(
            (m) => m.CoursesDetailsComponent
          ),
      },
      {
        path: `${UrlsNames.about}`,
        loadComponent: () =>
          import('./pages/about-page/about-page.component').then(
            (m) => m.AboutPageComponent
          ),
      },
      {
        path: `${UrlsNames.contact}`,
        loadComponent: () =>
          import(
            './pages/home/components/home-contact/home-contact.component'
          ).then((m) => m.HomeContactComponent),
      },
      {
        path: `${UrlsNames.instructors}`,
        loadComponent: () =>
          import('./pages/instructor-page/instructor-page.component').then(
            (m) => m.InstructorPageComponent
          ),
      },
    ],
  },
  {
    path: `${UrlsNames.signup}`,
    loadComponent: () =>
      import('./auth/register/register.component').then(
        (m) => m.RegisterComponent
      ),
  },
  {
    path: `${UrlsNames.login}`,
    loadComponent: () =>
      import('./auth/login/login.component').then((m) => m.LoginComponent),
  },
];
