import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddComponent } from './pages/add/add.component';
import { DetailComponent } from './pages/detail/detail.component';
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
        title: 'Lista de Usuarios',
        canActivate: [RoleGuard],
        data: { roles: [ROLE.ADMIN, ROLE.SUPPORT] }
      },
      {
        path: 'new',
        component: AddComponent,
        title: 'Nuevo Usuario',
        canActivate: [RoleGuard],
        data: { roles: [ROLE.ADMIN, ROLE.SUPPORT] }
      },
      {
        path: ':id',
        component: DetailComponent,
        title: 'Detalles del Usuario',
        canActivate: [RoleGuard],
        data: { roles: [ROLE.ADMIN, ROLE.SUPPORT] }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
