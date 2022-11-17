import { Component, OnInit } from '@angular/core';

import { ISubject } from '@data/interfaces';
import { SubjectsService } from '@modules/academics/subjects/services/subjects.service';
import { ConvertFileService } from '@core/services/convert-file.service';

@Component({
  selector: 'app-subject-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public show: boolean = false;
  public file: File | undefined;
  public rows: ISubject[] = [];
  public limit: number = 10;

  constructor(
    private subjectsService: SubjectsService,
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
    this.subjectsService.createSubject(this.rows)
      .subscribe((data: ISubject[]) => {
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
      .then((data: ISubject[]) => this.rows = data)
      .catch((error: Error) => console.log(error));
  }

}