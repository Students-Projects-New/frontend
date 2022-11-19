import { Component, OnInit } from '@angular/core';

import { ICourse } from '@data/interfaces';
import { CoursesService } from '@modules/academics/courses/services/courses.service';
import { CourseMock } from '@data/mocks/course.mock';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public courses: ICourse[] = [];

  constructor(
    private coursesService: CoursesService,
    private courseMock: CourseMock
  ) { }

  ngOnInit(): void {
    this.getCourses();
  }

  public getCourses(): void {
    this.coursesService.getCourses(1)
      .subscribe((courses: ICourse[]) => {
        this.courses = courses;
        console.log(this.courses);
      });
  }

  public getCoursesMock(): void {
    this.courseMock.getCourses()
      .subscribe((courses: ICourse[]) => {
        this.courses = courses;
        console.log(this.courses);
      });
  }

}
