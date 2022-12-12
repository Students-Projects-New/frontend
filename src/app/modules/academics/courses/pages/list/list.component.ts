import { Component, OnInit } from '@angular/core';

import { ICourse } from '@data/interfaces';
import { AuthService } from '@core/authentication';
import { CoursesService } from '@modules/academics/courses/services';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public courses: ICourse[] = [];

  constructor(
    private authService: AuthService,
    private coursesService: CoursesService
  ) { }

  ngOnInit(): void {
    this.getCourses();
  }

  private getCourses(): void {
    const id = this.authService.getCurrentUserSubject().id;
    this.coursesService
      .getCourses(id)
      .subscribe((courses: ICourse[]) => {
        this.courses = courses;
      });
  }

}
