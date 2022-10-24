import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as SharedComponents from './components';
import { PermissionsDirective } from './directives/permissions.directive';
import { RolesDirective } from './directives/roles.directive';


@NgModule({
  declarations: [
    ...SharedComponents.components,
    PermissionsDirective,
    RolesDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...SharedComponents.components
  ]
})
export class SharedModule { }
