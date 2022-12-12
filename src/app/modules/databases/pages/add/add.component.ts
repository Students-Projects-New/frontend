import { Component, Input, Output, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { DatabasesService } from '@modules/databases/services/databases.service';

declare var $: any;

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public username: string;
  @Output() close = new EventEmitter<boolean>();
  public formUserSGDB: FormGroup;

  constructor(
    private fb: FormBuilder,
    private databaseService: DatabasesService,
  ) {
    this.username = JSON.parse(localStorage.getItem('currentUser')!).email.split('@')[0];
    this.formUserSGDB = this.fb.group({
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
      ])),
    });
  }

  ngOnInit(): void {
    this.openModal('show');
  }

  private openModal(action: string): void {
    $('#addRowModal').modal(action);
  }

  public closedModal(value: boolean = false): void {
    this.openModal('hide');
    this.close.emit(value);
  }

  public createUserSGDB(): void {
    const password = this.formUserSGDB.get('password')!.value;
    this.databaseService
      .createUserSGDB(password)
      .subscribe();
    this.closedModal(true);
  }

}
