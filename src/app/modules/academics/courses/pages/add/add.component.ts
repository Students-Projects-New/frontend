import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ConvertFileService } from '@core/services';
import { CoursesService } from '@modules/academics/courses/services';
import { UsersService } from '@modules/users/services';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public show: boolean = false;
  private file: File | undefined;
  public rows: string[] = [];
  private students: number[] = [];

  constructor(
    private coursesService: CoursesService,
    private convertFileService: ConvertFileService,
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  public onFileChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.file = (target.files as FileList)[0];
    this.txtToJson();
  }

  public onUpload(): void {
    this.show = true;
  }

  private onReset(): void {
    this.show = false;
    this.file = undefined;
    this.rows = [];
  }

  public onSubmit(): void {
    this.usersService
      .getUserByEmails(this.rows)
      .subscribe((data) => {
        this.students = data.students;
        this.setEnrollStudentCourse();
        this.onReset();
      });
  }

  public onCancel(): void {
    this.onReset();
  }

  public isFileSelected(): boolean {
    return this.file !== undefined;
  }

  private txtToJson(): void {
    this.convertFileService
      .convertTxtToJson(this.file as File)
      .then((data: any) => this.rows = data)
      .catch((error: any) => console.log(error));
  }

  private setEnrollStudentCourse(): void {
    const idCourse = this.coursesService.currentCourseSubjectValue.id;
    this.coursesService
      .setEnrollStudentCourse(idCourse, this.students)
      .subscribe(() => this.onNavigate(idCourse));
  }

  private onNavigate(idCourse: number): void {
    this.router.navigate(['/academics/courses/', idCourse]);
  }

}
