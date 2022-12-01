import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ICourse, IProject } from '@data/interfaces';
import { AuthService } from '@core/authentication/auth.service';
import { CoursesService } from '@modules/academics/courses/services/courses.service';
import { ProjectsService } from '@modules/projects/services/projects.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  private idCourse!: number;
  public course: ICourse = {} as ICourse;
  public projects: IProject[] = [];

  constructor(
    private authService: AuthService,
    private coursesService: CoursesService,
    private projectsService: ProjectsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.idCourse = +this.route.snapshot.params['id'];
    this.getCurrenCourse();
  }

  private getCurrenCourse(): void {
    this.coursesService.getCourseById(this.idCourse)
      .subscribe((course: ICourse) => {
        this.course = course;
      });
  }

}
