import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { IVar } from '@data/interfaces';
import { VarsService } from '@app/modules/projects/services/vars.service';

@Component({
  selector: 'app-vars',
  templateUrl: './vars.component.html',
  styleUrls: ['./vars.component.css']
})
export class VarsComponent implements OnInit {

  varsForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private varsService: VarsService
  ) {
    this.varsForm = this.fb.group({
      vars: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.varsService.
      getVars(2, 3)
      .subscribe((vars: IVar[]) => {
        vars.forEach((v: IVar) => {
          this.vars.push(this.fb.group({
            key: new FormControl(v.name_var, Validators.required),
            value: new FormControl(v.value_var, Validators.required)
          }));
        });
      });
  }

  validationMessages = {
    key: [{ type: 'required', message: 'Key is required' }],
    value: [{ type: 'required', message: 'Value is required' }]
  };

  get vars(): FormArray {
    return this.varsForm.get('vars') as FormArray;
  }

  get f() {
    return this.vars.controls;
  }

  public isFieldValid(field: string, index: number): boolean {
    return this.vars.controls[index].get(field)!.dirty || this.vars.controls[index].get(field)!.touched;
  }

  public addVar(): void {
    const varControl = this.fb.group({
      key: new FormControl('', Validators.required),
      value: new FormControl('', Validators.required)
    })
    this.vars.push(varControl);
  }

  public editVar(index: number): void {
    const varControl = this.fb.group({
      key: new FormControl(this.vars.value[index].key, Validators.required),
      value: new FormControl(this.vars.value[index].value, Validators.required)
    })
    this.vars.setControl(index, varControl);
  }

  public saveVars(): void {
    console.log(this.varsForm.value);
  }

  public deleteVar(index: number): void {
    this.vars.removeAt(index);
  }

}
