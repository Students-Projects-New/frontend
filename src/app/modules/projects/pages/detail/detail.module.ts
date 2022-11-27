import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { ProjectsModule } from '@modules/projects/projects.module';
import { DetailComponent } from './detail.component';


const COMPONENTS = [
  DetailComponent,
  ...DetailRoutingModule.components
];

const MODULES = [
  CommonModule,
  DetailRoutingModule,
  ProjectsModule
];


@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES]
})
export class DetailModule { }
