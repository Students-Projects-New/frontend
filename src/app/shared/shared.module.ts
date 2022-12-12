import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import * as SharedComponents from './components';
import * as SharedPipes from './pipes';
import * as SharedDirectives from './directives';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CardDatabaseComponent } from './components/cards/card-database/card-database.component';

const MODULES = [
  CommonModule,
  RouterModule,
  NgxDatatableModule
];

const DIRECTIVES = [
  ...SharedDirectives.directives
];

const PIPES = [
  ...SharedPipes.pipes
];


@NgModule({
  declarations: [...SharedComponents.components, ...DIRECTIVES, ...PIPES, CardDatabaseComponent],
  imports: [...MODULES],
  exports: [...SharedComponents.components, ...DIRECTIVES, ...PIPES],
})
export class SharedModule { }
