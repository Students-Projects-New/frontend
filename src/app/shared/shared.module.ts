import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as SharedComponents from './components';
import { RolesDirective } from './directives/roles.directive';
import { CardCourseComponent } from './components/cards/card-course/card-course.component';
import { CardUserComponent } from './components/cards/card-user/card-user.component';


@NgModule({
  declarations: [...SharedComponents.components, RolesDirective, CardCourseComponent, CardUserComponent],
  imports: [CommonModule],
  exports: [...SharedComponents.components, RolesDirective]
})
export class SharedModule { }
