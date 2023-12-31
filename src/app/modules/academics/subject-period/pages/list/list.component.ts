import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ICourse } from '@data/interfaces';
import { SubjectPeriodService } from '@modules/academics/subject-period/services';
import { DatatableComponent } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public course: ICourse = {} as ICourse;
  public rows: ICourse[] = [];
  private temp: ICourse[] = [];
  public limit: number = 10;
  @ViewChild(DatatableComponent) table!: DatatableComponent;

  constructor(
    private subjectPeriodService: SubjectPeriodService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getSubjectsPeriod();
  }

  private getSubjectsPeriod(): void {
    this.subjectPeriodService
      .getSubjectsPeriod()
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
    const temp = this.temp.filter((d: ICourse) => {
      return d.id_subject.id!.toString().toLowerCase().indexOf(val) !== -1 || !val ||
        d.id_subject.code.toLowerCase().indexOf(val) !== -1 || !val ||
        d.id_subject.name.toLowerCase().indexOf(val) !== -1 || !val ||
        d.id_teacher.toString().toLowerCase().indexOf(val) !== -1 || !val ||
        d.group.toLowerCase().indexOf(val) !== -1 || !val ||
        d.year.toLowerCase().indexOf(val) !== -1 || !val ||
        d.period.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rows = temp;
    this.table.offset = 0;
  }

  public createSubjectPeriod(): void {
    this.router.navigate(['/academics/subject-period/new']);
  }

  public deleteSubjectPeriod(id: number): void {
    this.subjectPeriodService
      .deleteSubjectPeriod(id)
      .subscribe(() => {
        this.getSubjectsPeriod();
      });
  }

}
