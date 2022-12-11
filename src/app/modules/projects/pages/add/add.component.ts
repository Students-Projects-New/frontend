import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { IValidationMessages, ICourseStudent, IProject } from '@data/interfaces';
import { ConvertFileService } from '@core/services';
import { AuthService } from '@core/authentication';
import { ProjectValidateContextService } from '@core/services';
import { CourseStudentService } from '@modules/projects';
import { ProjectsService } from '@modules/projects';

@Component({
  selector: 'app-project-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public currentUser: any = this.authService.getCurrentUserSubject();
  public imageURL: string;
  public coursesStudent: ICourseStudent[];
  public newProject: FormGroup;
  public validationMessages: IValidationMessages = {
    name: [
      { type: 'required', message: 'Nombre es requerido' },
      { type: 'minlength', message: 'Nombre debe tener al menos 5 caracteres' },
      { type: 'maxlength', message: 'Nombre no puede tener más de 25 caracteres' },
      { type: 'pattern', message: 'Nombre debe contener solo letras' },
    ],
    description: [
      { type: 'required', message: 'Descripción es requerida' },
      { type: 'minlength', message: 'Descripción debe tener al menos 5 caracteres' },
      { type: 'maxlength', message: 'Descripción no puede tener más de 1000 caracteres' }
    ],
    image: [
      { type: 'required', message: 'Imagen es requerida' },
    ],
    context: [
      { type: 'required', message: 'Contexto es requerido' },
      { type: 'minlength', message: 'Contexto debe tener al menos 5 caracteres' },
      { type: 'maxlength', message: 'Contexto no puede tener más de 25 caracteres' },
      { type: 'pattern', message: 'Contexto debe contener letras, números, acentos y espacios' },
      { type: 'exist', message: 'Contexto ya existe, busca otro 👎' },
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
    ],
    subject_period: [
      { type: 'required', message: 'Materia es requerido' },
    ],
  };

  constructor(
    private fb: FormBuilder,
    private convertFileService: ConvertFileService,
    private contexValidatorService: ProjectValidateContextService,
    private authService: AuthService,
    private courseStudentService: CourseStudentService,
    private projectsService: ProjectsService,
    private router: Router
  ) {
    this.imageURL = 'https://cdn-icons-png.flaticon.com/512/4173/4173337.png';
    this.coursesStudent = [];
    this.newProject = this.fb.group({
      id_user: new FormControl(this.currentUser.id),
      name: new FormControl('',
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(25),
          Validators.pattern('^[a-zA-Z ]*$')
        ])),
      description: new FormControl('',
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(1000)
        ])),
      image: new FormControl(null,
        Validators.compose([
          Validators.required
        ])),
      context: new FormControl('',
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(25),
          Validators.pattern('^[a-zA-Z0-9-]*$')
        ]),
        Validators.composeAsync([
          this.contexValidatorService.validate.bind(this.contexValidatorService)
        ])),
      port_container: new FormControl('',
        Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(5),
          Validators.pattern('^[0-9]*$')
        ])),
      url: new FormControl('',
        Validators.compose([
          Validators.required,
          Validators.pattern('^(https?://)?(www.)?((github.com)|(gitlab.com))/.+$')
        ])),
      static_path: new FormControl('src/app',
        Validators.compose([
          //Validators.pattern('^[a-zA-Z0-9/]*$')
        ])),
      subject_period: new FormControl(null,
        Validators.compose([
          Validators.required
        ])),
    });
  }

  ngOnInit(): void {
    this.getCoursesStudent();
  }

  public getCoursesStudent(): void {
    const id = this.authService.getCurrentUserSubject().id;
    this.courseStudentService
      .getCoursesStudent(id)
      .subscribe((coursesStudent: ICourseStudent[]) => {
        this.coursesStudent = coursesStudent;
      });
  }

  public get f() { return this.newProject.controls; }

  private formControlHasError(formControlName: string, errorName: string): boolean {
    return this.newProject.controls[formControlName].hasError(errorName);
  }

  public isFieldValid(field: string): boolean {
    return this.newProject.controls[field].dirty || this.newProject.controls[field].touched;
  }

  public showPreview(event: Event): void {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    this.newProject.patchValue({ image: file });
    if (target.files && file) {
      this.convertFileService
        .convertToBase64(file)
        .then((data: string) => this.imageURL = data)
        .catch((error: Error) => console.log(error));
    }
  }

  public changeSubjectPeriod(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.newProject.patchValue({ subject_period: target.value });
  }

  public onBack(): void {
    this.router.navigate(['/projects']);
  }

  public onSubmit(): void {
    //this.newProject.markAllAsTouched();
    if (!this.newProject.valid) {
      this.newProject.markAllAsTouched();
      return;
    }

    const formData: FormData = this.convertFileService.convertToFormData(this.newProject.value);
    this.projectsService
      .createProject(formData)
      .subscribe((project: IProject) => {
        this.router.navigate(['/projects']);
      });
  }

}
