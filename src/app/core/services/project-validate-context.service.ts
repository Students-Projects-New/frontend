import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { ProjectsService } from '@modules/projects/services';

@Injectable({
  providedIn: 'root'
})
export class ProjectValidateContextService implements AsyncValidator {

  constructor(
    private projectsService: ProjectsService
  ) { }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.projectsService.projectValidateContext(control.value)
      .pipe(
        map(({ exist }) => (exist) ? { exist: true } : null),
      );
  }

}
