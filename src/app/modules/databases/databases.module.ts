import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DatabasesRoutingModule } from './databases-routing.module';
import { ListComponent } from './pages/list/list.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AddComponent } from './pages/add/add.component';


@NgModule({
  declarations: [
    ListComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DatabasesRoutingModule,
    NgxDatatableModule
  ]
})
export class DatabasesModule { }
