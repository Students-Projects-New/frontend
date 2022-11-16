import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { IValidationMessages } from '@data/interfaces';
import { ProjectService } from '@modules/projects/services/project.service';

@Component({
  selector: 'app-project-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  newProject: FormGroup;
  validationMessages: IValidationMessages = {
    context: [
      { type: 'required', message: 'Context is required' },
      { type: 'minlength', message: 'Context must be at least 5 characters long' },
      { type: 'maxlength', message: 'Context cannot be more than 25 characters long' },
      { type: 'pattern', message: 'Your context must contain only letters' },
    ],
    port_container: [
      { type: 'required', message: 'Port Container is required' },
      { type: 'minlength', message: 'Port Container must be at least 2 characters long' },
      { type: 'maxlength', message: 'Port Container cannot be more than 5 characters long' },
      { type: 'pattern', message: 'Your port container must contain only numbers' },
    ],
    url: [
      { type: 'required', message: 'Url is required' },
      { type: 'pattern', message: 'Your url must be a repository github or gitlab' },
    ],
    static_path: [
      { type: 'required', message: 'Static Path is required' },
      { type: 'pattern', message: 'Your static path must be a folder path' },
    ]
  };

  constructor(
    private fb: FormBuilder,
    private projectService: ProjectService,
    private router: Router
  ) {
    this.newProject = this.fb.group({
      context: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(25),
        Validators.pattern('^[a-zA-Z ]*$')
      ])),
      port_container: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(4),
        Validators.pattern('^[0-9]*$')
      ])),
      url: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^(https?://)?(www.)?((github.com)|(gitlab.com))/.+$')
      ])),
      static_path: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^(\/[a-zA-Z0-9]+)+$')
      ])),
    });
  }

  ngOnInit(): void { }

  get f() { return this.newProject.controls; }

  formControlHasError(formControlName: string, errorName: string): boolean {
    return this.newProject.controls[formControlName].hasError(errorName);
  }

  isFieldValid(field: string): boolean {
    return this.newProject.controls[field].dirty || this.newProject.controls[field].touched;
  }

  onBack() {
    this.router.navigate(['/projects']);
  }

  onSubmit() {
    if (!this.newProject.valid) {
      this.newProject.markAllAsTouched();
      return;
    }
    console.log(this.newProject.value);
    this.projectService.createProject(this.newProject.value);
    this.newProject.reset();
  }

}
