import { Component, Input, OnInit } from '@angular/core';

import { IProject } from '@data/interfaces';

@Component({
  selector: 'card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.css']
})
export class CardProjectComponent implements OnInit {

  @Input() project!: IProject;

  constructor() { }

  ngOnInit(): void {
  }

}
