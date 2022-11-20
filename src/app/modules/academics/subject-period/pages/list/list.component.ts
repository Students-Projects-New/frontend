import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ICourse } from '@data/interfaces';
import { SubjectPeriodService } from '@modules/academics/subject-period/services/subject-period.service';
import { DatatableComponent } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public course: ICourse = {} as ICourse;
  public rows: ICourse[] = [];
  public temp: ICourse[] = [];
  public limit: number = 10;
  public showModal: boolean = false;
  @ViewChild(DatatableComponent) table!: DatatableComponent;

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
        this.temp = [...data];
      });
  }

  public onLimitChange(event: Event): void {
    this.limit = Number((event.target as HTMLInputElement).value);
    this.table.limit = this.limit;
  }

  public filterSubjects(event: Event): void {
    const val = (event.target as HTMLInputElement).value.toLowerCase();
    const temp = this.temp.filter(function (d) {
      return d.id_subject.name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rows = temp;
    this.table.offset = 0;
  }

  public createSubjectPeriod(): void {
    this.router.navigate(['/academics/subject-period/new']);
  }

  public openModal(course: ICourse): void {
    console.log(course);
    this.course = course;
    this.showModal = true;
  }

  public deleteSubjectPeriod(id: number): void {
    console.log(id);
  }

}
