import { Component, OnInit } from '@angular/core';

import { ISubjectPeriod, ICourse } from '@data/interfaces';
import { SubjectPeriodService } from '@modules/academics/subject-period/services/subject-period.service';
import { ConvertFileService } from '@core/services/convert-file.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public show: boolean = false;
  public file: File | undefined;
  public rows: ISubjectPeriod[] = [];
  public limit: number = 10;

  constructor(
    private subjectPeriodService: SubjectPeriodService,
    private convertFileService: ConvertFileService
  ) { }

  ngOnInit(): void { }

  onFileChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.file = (target.files as FileList)[0];
    this.xlsxToJson();
  }

  onLimitChange(event: Event) {
    this.limit = Number((event.target as HTMLInputElement).value);
  }

  onUpload() {
    this.show = true;
  }

  onReset() {
    this.show = false;
    this.file = undefined;
    this.rows = [];
    this.limit = 10;
  }

  onSubmit() {
    this.subjectPeriodService.createSubjectPeriod(this.rows)
      .subscribe((data: ICourse[]) => {
        this.onReset();
      });
  }

  onCancel() {
    this.onReset();
  }

  public isFileSelected(): boolean {
    return this.file !== undefined;
  }

  private xlsxToJson(): void {
    this.convertFileService.convertToJson(this.file as File)
      .then((data: ISubjectPeriod[]) => this.rows = data)
      .catch((error: Error) => console.log(error));
  }

}