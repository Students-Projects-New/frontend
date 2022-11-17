import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { IValidationMessages } from '@data/interfaces';
import { ConvertFileService } from '@core/services/convert-file.service';
import { ProjectService } from '@modules/projects/services/project.service';

@Component({
  selector: 'app-project-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  imageURL: string;
  newProject: FormGroup;
  validationMessages: IValidationMessages = {
    name: [
      { type: 'required', message: 'Nombre es requerido' },
      { type: 'minlength', message: 'Nombre debe tener al menos 5 caracteres' },
      { type: 'maxlength', message: 'Nombre no puede tener más de 25 caracteres' },
      { type: 'pattern', message: 'Nombre debe contener solo letras' },
    ],
    description: [
      { type: 'required', message: 'Descripción es requerida' },
      { type: 'minlength', message: 'Descripción debe tener al menos 5 caracteres' },
      { type: 'maxlength', message: 'Descripción no puede tener más de 25 caracteres' },
      { type: 'pattern', message: 'Descripción debe contener solo letras' },
    ],
    context: [
      { type: 'required', message: 'Contexto es requerido' },
      { type: 'minlength', message: 'Contexto debe tener al menos 5 caracteres' },
      { type: 'maxlength', message: 'Contexto no puede tener más de 25 caracteres' },
      { type: 'pattern', message: 'Contexto debe contener letras, números y guiones' },
    ],
    port_container: [
      { type: 'required', message: 'Puerto es requerido' },
      { type: 'minlength', message: 'Puerto debe tener al menos 2 caracteres' },
      { type: 'maxlength', message: 'Puerto no puede tener más de 5 caracteres' },
      { type: 'pattern', message: 'Puerto debe contener solo números' },
    ],
    url: [
      { type: 'required', message: 'URL es requerido' },
      { type: 'pattern', message: 'URL debe ser un repositorio de GitHub o GitLab' },
    ],
    static_path: [
      { type: 'pattern', message: 'Ruta estática debe ser un directorio' },
    ]
  };

  constructor(
    private fb: FormBuilder,
    private convertFileService: ConvertFileService,
    private projectService: ProjectService,
    private router: Router
  ) {
    this.imageURL = '';
    this.newProject = this.fb.group({
      name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(25),
        Validators.pattern('^[a-zA-Z ]*$')
      ])),
      description: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(25),
        Validators.pattern('^[a-zA-Z ]*$')
      ])),
      image: [null],
      context: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(25),
        Validators.pattern('^[a-zA-Z0-9-]*$')
      ])),
      port_container: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(5),
        Validators.pattern('^[0-9]*$')
      ])),
      url: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^(https?://)?(www.)?((github.com)|(gitlab.com))/.+$')
      ])),
      static_path: new FormControl('', Validators.compose([
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

  showPreview(event: Event) {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    if (target.files && file) {
      this.convertFileService.convertToBase64(file)
        .then((data: string) => this.imageURL = data)
        .catch((error: Error) => console.log(error));
      this.newProject.patchValue({ image: file });
    }
  }

  onBack() {
    this.router.navigate(['/projects']);
  }

  onSubmit() {
    console.log(this.newProject.value);
    /*if (!this.newProject.valid) {
      this.newProject.markAllAsTouched();
      return;
    }
    console.log(this.newProject.value);
    this.projectService.createProject(this.newProject.value);
    this.newProject.reset();*/
  }

}
