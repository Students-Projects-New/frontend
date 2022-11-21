import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SubjectPeriodRoutingModule } from './subject-period-routing.module';
import { ListComponent } from './pages/list/list.component';
import { DetailComponent } from './pages/detail/detail.component';
import { AddComponent } from './pages/add/add.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

const COMPONENTS = [
  ListComponent,
  DetailComponent,
  AddComponent
];

const MODULES = [
  CommonModule,
  ReactiveFormsModule,
  SubjectPeriodRoutingModule,
  NgxDatatableModule
]


@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES]
})
export class SubjectPeriodModule { }
