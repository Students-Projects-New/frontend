import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddComponent } from './pages/add/add.component';
import { DetailComponent } from './pages/detail/detail.component';
import { ListComponent } from './pages/list/list.component';

import { AdminLayoutComponent } from '@layout/admin-layout/admin-layout.component';

const SUBJECT_PERIOD_ROUTES: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        component: ListComponent,
        pathMatch: 'full',
        title: 'Lista de Materias Periodo'
      },
      {
        path: 'new',
        component: AddComponent,
        title: 'Nuevo Materia Periodo'
      },
      {
        path: ':id',
        component: DetailComponent,
        title: 'Detalle de la Materia Periodo'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(SUBJECT_PERIOD_ROUTES)],
  exports: [RouterModule]
})
export class SubjectPeriodRoutingModule { }
