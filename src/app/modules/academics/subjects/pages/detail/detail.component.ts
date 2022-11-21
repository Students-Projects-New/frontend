import { Component, Input, Output, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { ISubject, IValidationMessages } from '@data/interfaces';
import { SubjectsService } from '@modules/academics/subjects/services/subjects.service';

declare var $: any;

@Component({
  selector: 'app-subject-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, OnDestroy {

  @Input() subject!: ISubject;
  @Output() showModal = new EventEmitter<boolean>();
  public formSubject: FormGroup;
  public validationMessages: IValidationMessages = {
    code: [
      { type: 'required', message: 'Codigo es requerido' },
      { type: 'minlength', message: 'Codigo debe tener al menos 7 caracteres' },
      { type: 'maxlength', message: 'Codigo no puede tener mas de 7 caracteres' },
      { type: 'pattern', message: 'El codigo solo puede contener numeros' },
    ],
    name: [
      { type: 'required', message: 'Nombre es requerido' },
      { type: 'minlength', message: 'Nombre debe tener al menos 5 caracteres' },
      { type: 'maxlength', message: 'Nombre no puede tener mas de 50 caracteres' },
      { type: 'pattern', message: 'El nombre solo puede contener letras' },
    ],
  };

  constructor(
    private fb: FormBuilder,
    private subjectsService: SubjectsService,
  ) {
    this.formSubject = this.fb.group({
      id: new FormControl(''),
      code: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(7),
        Validators.maxLength(7),
        Validators.pattern('^[0-9]*$'),
      ])),
      name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(50),
        Validators.pattern('^[a-zA-Z ]*$'),
      ])),
    });
  }

  ngOnInit(): void {
    this.openModal('show');
    this.formSubject.setValue({
      id: this.subject.id,
      code: this.subject.code,
      name: this.subject.name,
    });
  }

  public openModal(action: string): void {
    $('#editModal').modal(action);
  }

  public get f() { return this.formSubject.controls; }

  public isFieldValid(field: string): boolean {
    return this.formSubject.controls[field].dirty || this.formSubject.controls[field].touched;
  }

  public updateSubject(): void {
    this.subjectsService.updateSubject(this.subject.id!, this.subject)
      .subscribe((data: ISubject) => {
        this.subject = data;
      });
      this.showModal.emit(false);
  }

  public closedModal(): void {
    this.openModal('hide');
    this.showModal.emit(false);
  }

  ngOnDestroy(): void {
    this.formSubject.reset();
  }

}
