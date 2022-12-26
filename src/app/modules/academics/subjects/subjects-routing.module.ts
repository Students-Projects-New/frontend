import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddComponent } from './pages/add/add.component';
import { DetailComponent } from './pages/detail/detail.component';
import { ListComponent } from './pages/list/list.component';

import { AdminLayoutComponent } from '@layout/admin-layout/admin-layout.component';

const SUBJECTS_ROUTES: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        component: ListComponent,
        pathMatch: 'full',
        title: 'Lista de Materias'
      },
      {
        path: 'new',
        component: AddComponent,
        title: 'Nueva Materia'
      },
      {
        path: ':id',
        component: DetailComponent,
        title: 'Detalles de la Materia'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(SUBJECTS_ROUTES)],
  exports: [RouterModule]
})
export class SubjectsRoutingModule { }
