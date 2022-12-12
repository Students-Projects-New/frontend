import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './pages/list/list.component';

import { AdminLayoutComponent } from '@layout/admin-layout/admin-layout.component';
import { RoleGuard } from '@core/guards';
import { ROLE } from "@data/enums/role.enum";

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        component: ListComponent,
        pathMatch: 'full',
        title: 'Lista de Bases de Datos',
        canActivate: [RoleGuard],
        data: { roles: [ROLE.ADMIN, ROLE.SUPPORT, ROLE.TEACHER, ROLE.STUDENT] }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatabasesRoutingModule { }
