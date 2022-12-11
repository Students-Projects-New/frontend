import { Component, OnInit } from '@angular/core';

import { ICourse, IProject, IUserDto } from '@data/interfaces';
import { CollaboratorsService } from '@app/core';
import { CurrentProjectService } from '@modules/projects';
import { CoursesService } from '@modules/academics/courses';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  public project: IProject;
  public collaborators: Record<number, IUserDto>;
  public course: ICourse;

  constructor(
    private collaboratorsService: CollaboratorsService,
    private currentProjectService: CurrentProjectService,
    private courseService: CoursesService,
  ) {
    this.project = {} as IProject;
    this.collaborators = {} as Record<number, IUserDto>;
    this.course = {} as ICourse;
  }

  ngOnInit(): void {
    this.getProject();
  }

  public getProject(): void {
    this.currentProjectService
      .currentProjectValue
      .subscribe((project: IProject) => {
        this.project = project;
        this.setCourse();
        this.getContributors();
      });
  }

  public setCourse(): void {
    this.courseService
      .currentCourse
      .subscribe((course: ICourse) => {
        this.course = course;
      });
  }

  public getContributors(): void {
    this.collaboratorsService
      .currentContributors
      .subscribe((contributors: Record<number, IUserDto>) => {
        this.collaborators = contributors;
      });
  }

  public isContributorsEmpty(): boolean {
    const contributors = !this.getContributorsLength();
    return contributors;
  }

  public getContributorsLength(): number {
    return Object.keys(this.collaborators).length;
  }

  public isCourseEmpty(): boolean {
    return Object.keys(this.course).length === 0;
  }

}
