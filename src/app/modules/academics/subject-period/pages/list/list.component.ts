import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ICourse } from '@data/interfaces';
import { SubjectPeriodService } from '@modules/academics/subject-period/services/subject-period.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public course: ICourse = {} as ICourse;
  public rows: ICourse[] = [];
  public limit: number = 10;
  public showModal: boolean = false;

  constructor(
    private subjectPeriodService: SubjectPeriodService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getSubjectsPeriod();
  }

  public getSubjectsPeriod(): void {
    this.subjectPeriodService.getSubjectsPeriod()
      .subscribe((data: ICourse[]) => {
        this.rows = data;
      });
  }

  public createSubjectPeriod(): void {
    this.router.navigate(['/academics/subject-period/new']);
  }

  public openModal(course: ICourse): void {
    this.course = course;
    this.showModal = true;
  }

  public deleteSubjectPeriod(id: number): void {
    console.log(id);
  }

}
