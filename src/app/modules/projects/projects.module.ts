import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@shared/shared.module';
import { LogMonitorModule } from 'ngx-log-monitor';

import { ProjectsRoutingModule } from './projects-routing.module';


@NgModule({
  declarations: [
    ...ProjectsRoutingModule.components
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    ProjectsRoutingModule,
    LogMonitorModule
  ]
})
export class ProjectsModule { }
