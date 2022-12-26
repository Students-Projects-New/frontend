import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnalyticsComponent } from './pages/analytics/analytics.component';

import { AdminLayoutComponent } from '@layout/admin-layout/admin-layout.component';

const DASHBOARD_ROUTES: Routes = [
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
  imports: [RouterModule.forChild(DASHBOARD_ROUTES)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
