import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as SharedComponents from './components';
import * as SharedPipes from './pipes';
import { RolesDirective } from './directives/roles.directive';


@NgModule({
  declarations: [...SharedComponents.components, RolesDirective, ...SharedPipes.pipes],
  imports: [CommonModule],
  exports: [...SharedComponents.components, RolesDirective, ...SharedPipes.pipes]
})
export class SharedModule { }
