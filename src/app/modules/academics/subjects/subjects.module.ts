import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectsRoutingModule } from './subjects-routing.module';
import { ListComponent } from './pages/list/list.component';
import { AddComponent } from './pages/add/add.component';
import { DetailsComponent } from './pages/details/details.component';


@NgModule({
  declarations: [
    ListComponent,
    AddComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    SubjectsRoutingModule
  ]
})
export class SubjectsModule { }
