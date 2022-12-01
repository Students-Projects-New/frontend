import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@shared/shared.module';
import { LogMonitorModule } from 'ngx-log-monitor';

import { ProjectsRoutingModule } from './projects-routing.module';
import { VarsComponent } from './components/vars/vars.component';
import { LogsComponent } from './components/logs/logs.component';
import { PhaseComponent } from './components/phase/phase.component';
import { TagsComponent } from './components/tags/tags.component';
import { CollaboratorsComponent } from './components/collaborators/collaborators.component';
import { MaintenanceModeComponent } from './components/maintenance-mode/maintenance-mode.component';
import { DeleteProjectComponent } from './components/delete-project/delete-project.component';

const COMPONENTS = [
  VarsComponent,
  LogsComponent,
  PhaseComponent,
  TagsComponent,
  CollaboratorsComponent,
  MaintenanceModeComponent,
  DeleteProjectComponent,
];

const MODULES = [
  CommonModule,
  ReactiveFormsModule,
  SharedModule,
  ProjectsRoutingModule,
  LogMonitorModule
];


@NgModule({
  declarations: [...ProjectsRoutingModule.components, ...COMPONENTS, PhaseComponent],
  imports: [...MODULES],
  exports: [...COMPONENTS]
})
export class ProjectsModule { }
