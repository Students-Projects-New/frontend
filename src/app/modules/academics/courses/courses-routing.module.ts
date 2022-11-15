import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddComponent } from './pages/add/add.component';
import { DetailComponent } from './pages/detail/detail.component';
import { ListComponent } from './pages/list/list.component';

import { AdminLayoutComponent } from '@layout/admin-layout/admin-layout.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        component: ListComponent,
        pathMatch: 'full',
        title: 'Lista de Cursos'
      },
      {
        path: 'new',
        component: AddComponent,
        title: 'Nuevo Curso'
      },
      {
        path: ':id',
        component: DetailComponent,
        title: 'Detalles del Curso'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
