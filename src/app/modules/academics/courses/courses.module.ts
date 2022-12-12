import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { SharedModule } from '@shared/shared.module';
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
  CoursesRoutingModule,
  NgxDatatableModule,
  SharedModule
]


@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES]
})
export class CoursesModule { }
