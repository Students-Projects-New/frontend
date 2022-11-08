import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as SharedComponents from './components';
import { RolesDirective } from './directives/roles.directive';


@NgModule({
  declarations: [...SharedComponents.components, RolesDirective],
  imports: [CommonModule],
  exports: [...SharedComponents.components, RolesDirective]
})
export class SharedModule { }
