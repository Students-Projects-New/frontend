import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { IVar, IValidationMessages } from '@data/interfaces';
import { VarsService } from '@modules/projects/services';
import { CurrentProjectService } from '@modules/projects/services';

@Component({
  selector: 'app-vars',
  templateUrl: './vars.component.html',
  styleUrls: ['./vars.component.css']
})
export class VarsComponent implements OnInit, OnDestroy {

  private idProject: number;
  private idOwner: number;
  private subscription$: Subscription;
  public varsForm: FormGroup;
  private varsCopy: any[] = [];

  constructor(
    private fb: FormBuilder,
    private varsService: VarsService,
    private currentProjectService: CurrentProjectService,
  ) {
    this.idProject = 0;
    this.idOwner = 0;
    this.subscription$ = new Subscription();
    this.varsForm = this.fb.group({
      vars: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.getProjectValue();
  }

  private getProjectValue(): void {
    this.subscription$ = this.currentProjectService
      .currentProjectValue
      .subscribe((project) => {
        this.idProject = project.id;
        this.idOwner = project.id_user;
        if (this.idProject) {
          this.getVars(this.idOwner, this.idProject);
        }
      });
  }

  private getVars(idOwner: number, idProject: number): void {
    this.subscription$ = this.varsService.
      getVars(idOwner, idProject)
      .subscribe((vars: IVar[]) => {
        vars.forEach((v: IVar) => {
          this.vars.push(this.fb.group({
            id: new FormControl(v.id),
            name_var: new FormControl({ value: v.name_var, disabled: true }, Validators.required),
            value_var: new FormControl({ value: v.value_var, disabled: true }, Validators.required),
            edit: new FormControl(false),
            empty: new FormControl(false),
          }));
        });
        this.vars.push(this.newVar());
      });
  }

  public validationMessages: IValidationMessages = {
    name_var: [{ type: 'required', message: 'Key is required' }],
    value_var: [{ type: 'required', message: 'Value is required' }]
  };

  get vars(): FormArray {
    return this.varsForm.get('vars') as FormArray;
  }

  get f() {
    return this.vars.controls;
  }

  public isFieldEmptyOrEdit(index: number, field: string): boolean {
    return this.vars.controls[index].get(field)!.value;
  }

  private isFieldValid(field: string, index: number): boolean {
    return this.vars.controls[index].get(field)!.dirty || this.vars.controls[index].get(field)!.touched;
  }

  public isFieldValidControl(field: string, index: number): boolean {
    return this.vars.controls[index].get(field)!.invalid && this.isFieldValid(field, index);
  }

  public getErrorMessage(field: string, index: number): string {
    let message = '';
    this.validationMessages[field].forEach((v) => {
      if (this.f[index].get(field)!.hasError(v.type) && this.isFieldValid(field, index)) {
        message = v.message;
      }
    });
    return message;
  }

  private newVar(): FormGroup {
    return this.fb.group({
      id: new FormControl(this.vars.length + 1),
      name_var: new FormControl('', Validators.required),
      value_var: new FormControl('', Validators.required),
      edit: new FormControl(false),
      empty: new FormControl(true),
    });
  }

  public addVar(index: number): void {
    this.saveVarService(index);
    this.vars.push(this.newVar());
  }

  private enableFields(index: number): void {
    this.vars.controls[index].get('name_var')!.enable();
    this.vars.controls[index].get('value_var')!.enable();
    this.vars.controls[index].get('edit')!.setValue(true);
  }

  private disableFields(index: number): void {
    this.vars.controls[index].get('name_var')!.disable();
    this.vars.controls[index].get('value_var')!.disable();
    this.vars.controls[index].get('edit')!.setValue(false);
  }

  private setCurrentVar(index: number, varValue: IVar): void {
    this.vars.controls[index].get('name_var')!.setValue(varValue.name_var);
    this.vars.controls[index].get('value_var')!.setValue(varValue.value_var);
  }

  private getCurrentVar(index: number): IVar {
    return {
      id: this.vars.controls[index].get('id')!.value,
      id_project: this.idProject,
      name_var: this.vars.controls[index].get('name_var')!.value,
      value_var: this.vars.controls[index].get('value_var')!.value,
    };
  }

  private saveVarService(index: number): void {
    this.varsService
      .addVar(this.getCurrentVar(index))
      .subscribe((res: IVar) => {
        this.vars.controls[index].get('id')!.setValue(res.id);
        this.vars.controls[index].get('name_var')!.setValue(res.name_var);
        this.vars.controls[index].get('value_var')!.setValue(res.value_var);
        this.vars.controls[index].get('edit')!.setValue(false);
        this.vars.controls[index].get('empty')!.setValue(false);
        this.disableFields(index);
      });
  }

  public updateVar(index: number): void {
    this.varsCopy = [];
    for (let i = 0; i < this.vars.controls.length; i++) {
      this.varsCopy.push(this.getCurrentVar(i));
    }
    this.enableFields(index);
  }

  public editVar(index: number): void {
    const currentVar = this.getCurrentVar(index);
    this.disableFields(index);
  }

  public cancelVar(index: number): void {
    const currentVar = this.varsCopy[index];
    this.setCurrentVar(index, currentVar);
    this.disableFields(index);
  }

  public deleteVar(index: number): void {
    const idVar = this.getCurrentVar(index).id;
    this.varsService
      .deleteVar(idVar)
      .subscribe();
    this.vars.removeAt(index);
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

}
