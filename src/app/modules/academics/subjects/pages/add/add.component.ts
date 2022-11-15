import { Component, OnInit } from '@angular/core';

import { ISubject } from '@data/interfaces';
import { SubjectsService } from '@modules/academics/subjects/services/subjects.service';
import { XlsxToJsonService } from '@core/services/xlsx-to-json.service';

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
    private xlsxToJsonService: XlsxToJsonService
  ) { }

  ngOnInit(): void { }

  onFileChange(event: Event) {
    this.file = (event.target as HTMLInputElement).files![0];
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
    this.xlsxToJsonService.convertToJson(this.file!)
      .then((data: ISubject[]) => {
        this.rows = data;
      });
  }

}