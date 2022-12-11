import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ICourse, IProject, IUserDto } from '@data/interfaces';
import { CollaboratorsService } from '@core/services';
import { CoursesService } from '@modules/academics/courses';

@Component({
  selector: 'card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.css']
})
export class CardProjectComponent implements OnInit, OnDestroy {

  @Input() project!: IProject;
  private subscription$: Subscription;
  private collaborators: number[];
  public contributors: Record<number, IUserDto>;
  public course: ICourse;

  constructor(
    private collaboratorsService: CollaboratorsService,
    private courseService: CoursesService,
  ) {
    this.subscription$ = new Subscription();
    this.collaborators = [];
    this.contributors = {};
    this.course = {} as ICourse;
  }

  ngOnInit(): void {
    this.setCourse();
    this.setCollaborators();
  }

  private setCollaborators(): void {
    this.collaborators = [...this.project.collaborators, this.project.id_user];
    this.getCollaborators();
  }

  public setCourse(): void {
    const course_id = this.project.subjects_period[0];
    this.courseService
      .getCourseById(course_id)
      .subscribe((course: ICourse) => {
        this.course = course;
      });
  }

  private getCollaborators(): void {
    this.subscription$ = this.collaboratorsService
      .setContributors(this.collaborators)
      .subscribe((contributors: IUserDto[]) => {
        contributors.forEach((contributor: IUserDto) => {
          this.contributors[contributor.id] = contributor;
        });
      });
  }

  public getContributorsLength(): number {
    return Object.keys(this.contributors).length;
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

}
