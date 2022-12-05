import { Component, OnInit } from '@angular/core';

import { AuthService } from '@app/core/authentication/auth.service';
import { CourseStudentService } from '@modules/projects/services/course-student.service';
import { User } from '@data/models';
import { ICourseStudent } from '@data/interfaces';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: [`
      .img-perfil {
        height: 100%;
        width: 100%;
        max-height: 500px;
        max-width: 500px;
        object-fit: cover;
        }`
  ]
})
export class ProfileComponent implements OnInit {

  public currentUser: User = {} as User;
  public coursesStudent: ICourseStudent[] = [];

  constructor(
    private authService: AuthService,
    private courseStudentService: CourseStudentService,
  ) { }

  ngOnInit(): void {
    this.getCurrrentUser();
    this.getCoursesStudent();
  }

  private getCurrrentUser(): void {
    this.currentUser = this.authService.getCurrentUserSubject();
  }

  private getCoursesStudent(): void {
    this.courseStudentService
      .getCoursesStudent(this.currentUser.id)
      .subscribe((coursesStudent: ICourseStudent[]) => {
        this.coursesStudent = coursesStudent;
      });
  }

}
