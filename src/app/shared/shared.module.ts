import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as SharedComponents from './components';


@NgModule({
  declarations: [
    ...SharedComponents.components
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...SharedComponents.components
  ]
})
export class SharedModule { }
