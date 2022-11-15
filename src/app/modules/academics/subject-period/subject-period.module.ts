import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectPeriodRoutingModule } from './subject-period-routing.module';
import { ListComponent } from './pages/list/list.component';
import { DetailComponent } from './pages/detail/detail.component';
import { AddComponent } from './pages/add/add.component';


@NgModule({
  declarations: [
    ListComponent,
    DetailComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    SubjectPeriodRoutingModule
  ]
})
export class SubjectPeriodModule { }
