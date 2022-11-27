import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@shared/shared.module';
import { LogMonitorModule } from 'ngx-log-monitor';

import { ProjectsRoutingModule } from './projects-routing.module';
import { VarsComponent } from './components/vars/vars.component';
import { LogsComponent } from './components/logs/logs.component';
import { TagsComponent } from './components/tags/tags.component';

const COMPONENTS = [
  VarsComponent,
  LogsComponent
];

const MODULES = [
  CommonModule,
  ReactiveFormsModule,
  SharedModule,
  ProjectsRoutingModule,
  LogMonitorModule
];


@NgModule({
  declarations: [...ProjectsRoutingModule.components, ...COMPONENTS, TagsComponent],
  imports: [...MODULES],
  exports: [...COMPONENTS]
})
export class ProjectsModule { }
