import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ISubject } from '@data/interfaces';
import { SubjectsService } from '@modules/academics/subjects/services/subjects.service';

@Component({
  selector: 'app-subject-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public subject: ISubject = {} as ISubject;
  public rows: ISubject[] = [];
  public limit: number = 10;
  public showModal: boolean = false;

  constructor(
    private subjectsService: SubjectsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getSubjects();
  }

  public getSubjects(): void {
    this.subjectsService.getSubjects()
      .subscribe((data: ISubject[]) => {
        this.rows = data;
      });
  }

  public createSubject(): void {
    this.router.navigate(['/academics/subjects/new']);
  }

  public openModal(subject: ISubject): void {
    this.subject = subject;
    this.showModal = true;
  }

  public deleteSubject(id: number): void {
    console.log(id);
  }

}
