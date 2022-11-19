import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import * as SharedComponents from './components';
import * as SharedPipes from './pipes';
import { RolesDirective } from './directives/roles.directive';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  declarations: [...SharedComponents.components, RolesDirective, ...SharedPipes.pipes],
  imports: [CommonModule, RouterModule, NgxDatatableModule],
  exports: [...SharedComponents.components, RolesDirective, ...SharedPipes.pipes]
})
export class SharedModule { }
