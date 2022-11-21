import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ISubject } from '@data/interfaces';
import { SubjectsService } from '@modules/academics/subjects/services/subjects.service';
import { DatatableComponent } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-subject-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public subject!: ISubject;
  public rows!: ISubject[];
  private temp!: ISubject[];
  public limit: number = 10;
  public showModal: boolean = false;
  @ViewChild(DatatableComponent) table!: DatatableComponent;

  constructor(
    private subjectsService: SubjectsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getSubjects();
  }

  private getSubjects(): void {
    this.subjectsService.getSubjects()
      .subscribe((data: ISubject[]) => {
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
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rows = temp;
    this.table.offset = 0;
  }

  public createSubject(): void {
    this.router.navigate(['/academics/subjects/new']);
  }

  public openModal(subject: ISubject): void {
    this.subject = subject;
    this.showModal = true;
  }

  public deleteSubject(id: number): void {
    this.subjectsService.deleteSubject(id)
      .subscribe((data: ISubject) => {
        this.getSubjects();
      });
  }

}
