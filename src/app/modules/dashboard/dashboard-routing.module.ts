import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnalyticsComponent } from './pages/analytics/analytics.component';

import { AdminLayoutComponent } from '@layout/admin-layout/admin-layout.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        component: AnalyticsComponent,
        pathMatch: 'full',
        title: 'Dashboard',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
