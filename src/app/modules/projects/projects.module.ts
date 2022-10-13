import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogMonitorModule } from 'ngx-log-monitor';

import { ProjectsRoutingModule } from './projects-routing.module';


@NgModule({
  declarations: [
    ...ProjectsRoutingModule.components
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    LogMonitorModule
  ]
})
export class ProjectsModule { }
