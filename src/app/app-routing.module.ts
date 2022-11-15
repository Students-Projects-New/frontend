import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { AuthGuard, NoAuthGuard } from '@core/guards';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('@modules/home/home.module').then((m) => m.HomeModule),
    canActivate: [NoAuthGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('@modules/auth/auth.module').then((m) => m.AuthModule),
    canActivate: [NoAuthGuard]
  },
  {
    path: 'dashboard',
    loadChildren: () => import('@modules/dashboard/dashboard.module').then((m) => m.DashboardModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'account',
    loadChildren: () => import('@modules/account/account.module').then((m) => m.AccountModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'projects',
    loadChildren: () => import('@modules/projects/projects.module').then((m) => m.ProjectsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'academics',
    loadChildren: () => import('@modules/academics/academics.module').then((m) => m.AcademicsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'users',
    loadChildren: () => import('@modules/users/users.module').then((m) => m.UsersModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'not-found',
    loadChildren: () => import('@modules/not-pages-found/not-pages-found.module').then((m) => m.NotPagesFoundModule)
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'not-found' }
];

const config: ExtraOptions = {
  anchorScrolling: 'enabled',
  useHash: true,
  enableTracing: false,
  preloadingStrategy: PreloadAllModules
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
