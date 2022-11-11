import { Component, OnInit } from '@angular/core';

import { ISubject } from '@data/interfaces';
import { XlsxToJsonService } from '@core/services/xlsx-to-json.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public file: File | undefined;
  public subjects: ISubject[] = [];

  constructor(
    private xlsxToJsonService: XlsxToJsonService
  ) { }

  ngOnInit(): void { }

  onFileChange(event: any) {
    this.file = event.target.files[0];
    this.xlsxToJson();
  }

  public isFileSelected(): boolean {
    return this.file !== undefined;
  }

  private xlsxToJson(): void {
    this.xlsxToJsonService.convertToJson(this.file!)
      .then((data: ISubject[]) => {
        this.subjects = data;
        console.log(this.subjects);
      });
  }

}