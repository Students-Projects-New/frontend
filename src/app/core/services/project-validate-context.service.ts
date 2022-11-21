import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { ProjectService } from '@modules/projects/services/project.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectValidateContextService implements AsyncValidator {

  constructor(
    private projectService: ProjectService
  ) { }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.projectService.projectValidateContext(control.value)
      .pipe(
        map(({ exist }) => (exist) ? { exist: true } : null),
      );
  }

}
