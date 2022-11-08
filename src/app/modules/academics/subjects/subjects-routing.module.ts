import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddComponent } from './pages/add/add.component';
import { DetailsComponent } from './pages/details/details.component';
import { ListComponent } from './pages/list/list.component';

import { AdminLayoutComponent } from '@layout/admin-layout/admin-layout.component';
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
        title: 'List Subjects',
        data: { roles: [ROLE.STUDENT] }
      },
      {
        path: 'new',
        component: AddComponent,
        title: 'New Subject',
        data: { roles: [ROLE.STUDENT] }
      },
      {
        path: ':id',
        component: DetailsComponent,
        title: 'Subject Details',
        data: { roles: [ROLE.STUDENT] }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectsRoutingModule { }
