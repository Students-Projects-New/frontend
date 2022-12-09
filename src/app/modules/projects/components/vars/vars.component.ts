import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { IVar, IValidationMessages } from '@data/interfaces';
import { VarsService } from '@app/modules/projects/services/vars.service';
import { CurrentProjectService } from '@modules/projects/services/current-project.service';

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
  private currentVar: IVar = {} as IVar;

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

  public isFieldEmpty(index: number): boolean {
    return this.vars.controls[index].get('empty')!.value;
  }

  public isFieldEdit(index: number): boolean {
    return this.vars.controls[index].get('edit')!.value;
  }

  public isFieldValid(field: string, index: number): boolean {
    return this.vars.controls[index].get(field)!.dirty || this.vars.controls[index].get(field)!.touched;
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

  public newVar(): FormGroup {
    return this.fb.group({
      id: new FormControl(0),
      name_var: new FormControl('', Validators.required),
      value_var: new FormControl('', Validators.required),
      edit: new FormControl(false),
      empty: new FormControl(true),
    });
  }

  public addVar(index: number): void {
    this.vars.push(this.newVar());
    this.vars.controls[index].get('empty')!.setValue(false);
    this.disableFields(index);
  }

  public enableFields(index: number): void {
    this.vars.controls[index].get('name_var')!.enable();
    this.vars.controls[index].get('value_var')!.enable();
    this.vars.controls[index].get('edit')!.setValue(true);
  }

  public disableFields(index: number): void {
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
        this.vars.controls[index].get('edit')!.setValue(false);
        this.vars.controls[index].get('empty')!.setValue(false);
        this.disableFields(index);
      });
  }

  public updateVar(index: number): void {
    this.currentVar = this.getCurrentVar(index);
    this.enableFields(index);
  }

  public editVar(index: number): void {
    const currentVar = this.getCurrentVar(index);
    this.disableFields(index);
  }

  public cancelVar(index: number): void {
    const currentVar = this.currentVar;
    this.setCurrentVar(index, currentVar);
    this.disableFields(index);
  }

  public deleteVar(index: number): void {
    this.vars.removeAt(index);
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

}
