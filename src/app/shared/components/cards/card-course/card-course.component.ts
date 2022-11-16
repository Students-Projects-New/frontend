import { Component, Input, OnInit } from '@angular/core';

import { ICourse } from '@data/interfaces';

@Component({
  selector: 'card-course',
  templateUrl: './card-course.component.html',
  styleUrls: ['./card-course.component.css']
})
export class CardCourseComponent implements OnInit {

  @Input() course!: ICourse;

  constructor() { }

  ngOnInit(): void {
  }

}
