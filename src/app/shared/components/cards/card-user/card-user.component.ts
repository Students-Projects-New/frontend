import { Component, Input } from '@angular/core';

import { IUserDto } from '@data/interfaces';

@Component({
  selector: 'card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.css']
})
export class CardUserComponent {

  @Input() user!: IUserDto;

  constructor() {
    console.log(this.user);
  }

}
