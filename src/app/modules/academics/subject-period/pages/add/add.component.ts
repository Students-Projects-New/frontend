import { Component, OnInit } from '@angular/core';

import { ISubjectPeriod, ICourse } from '@data/interfaces';
import { SubjectPeriodService } from '@modules/academics/subject-period';
import { ConvertFileService } from '@core/services';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public show: boolean = false;
  private file: File | undefined;
  public rows: ISubjectPeriod[] = [];
  public limit: number = 10;

  constructor(
    private subjectPeriodService: SubjectPeriodService,
    private convertFileService: ConvertFileService
  ) { }

  ngOnInit(): void { }

  public onFileChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.file = (target.files as FileList)[0];
    this.xlsxToJson();
  }

  public onLimitChange(event: Event): void {
    this.limit = Number((event.target as HTMLInputElement).value);
  }

  public onUpload(): void {
    this.show = true;
  }

  private onReset(): void {
    this.show = false;
    this.file = undefined;
    this.rows = [];
    this.limit = 10;
  }

  public onSubmit(): void {
    this.subjectPeriodService
      .createSubjectPeriod(this.rows)
      .subscribe((data: ICourse[]) => {
        this.onReset();
      });
  }

  public onCancel(): void {
    this.onReset();
  }

  public isFileSelected(): boolean {
    return this.file !== undefined;
  }

  private xlsxToJson(): void {
    this.convertFileService
      .convertToJson(this.file as File)
      .then((data: ISubjectPeriod[]) => this.rows = data)
      .catch((error: Error) => console.log(error));
  }

}