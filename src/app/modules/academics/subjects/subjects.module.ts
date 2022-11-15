import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SubjectsRoutingModule } from './subjects-routing.module';
import { ListComponent } from './pages/list/list.component';
import { AddComponent } from './pages/add/add.component';
import { DetailComponent } from './pages/detail/detail.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  declarations: [
    ListComponent,
    AddComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SubjectsRoutingModule,
    NgxDatatableModule
  ]
})
export class SubjectsModule { }
