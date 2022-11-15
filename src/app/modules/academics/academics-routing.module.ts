import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoleGuard } from '@core/guards';
import { ROLE } from "@data/enums/role.enum";

const routes: Routes = [
  {
    path: 'subjects',
    loadChildren: () => import('./subjects/subjects.module').then(m => m.SubjectsModule),
    canActivate: [RoleGuard],
    data: { roles: [ROLE.ADMIN, ROLE.SUPPORT] }
  },
  {
    path: 'subject-period',
    loadChildren: () => import('./subject-period/subject-period.module').then(m => m.SubjectPeriodModule),
    canActivate: [RoleGuard],
    data: { roles: [ROLE.ADMIN, ROLE.SUPPORT] }
  },
  {
    path: 'courses',
    loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule),
    canActivate: [RoleGuard],
    data: { roles: [ROLE.ADMIN, ROLE.SUPPORT, ROLE.TEACHER] }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcademicsRoutingModule { }
