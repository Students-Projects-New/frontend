import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddComponent } from './pages/add/add.component';
import { DetailsComponent } from './pages/details/details.component';
import { ListComponent } from './pages/list/list.component';

import { AdminLayoutComponent } from '@layout/admin-layout/admin-layout.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: '', component: ListComponent, pathMatch: 'full', title: 'List Projects' },
      { path: 'new', component: AddComponent, title: 'New Project' },
      { path: ':id', component: DetailsComponent, title: 'Project Details' }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule {
  static components = [ListComponent, DetailsComponent, AddComponent];
}
