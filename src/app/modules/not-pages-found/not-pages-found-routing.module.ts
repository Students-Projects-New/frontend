import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Page401Component } from './pages/page401/page401.component';
import { Page404Component } from './pages/page404/page404.component';
import { Page500Component } from './pages/page500/page500.component';

const NOT_PAGES_FOUND_ROUTES: Routes = [
  {
    path: '',
    children: [
      { path: 'page-401', component: Page401Component, title: 'Page 401' },
      { path: 'page-404', component: Page404Component, title: 'Page 404' },
      { path: 'page-500', component: Page500Component, title: 'Page 500' },
      { path: '**', redirectTo: 'page-404', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(NOT_PAGES_FOUND_ROUTES)],
  exports: [RouterModule]
})
export class NotPagesFoundRoutingModule {
  static components = [Page401Component, Page404Component, Page500Component];
}
