import { Component, OnInit } from '@angular/core';

import { ISubject } from '@data/interfaces';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public file: File | undefined;
  public subjects: ISubject[] = [];

  constructor() { }

  ngOnInit(): void { }

  onFileChange(event: any) {
    this.file = event.target.files[0];
    this.xlsxToJson();
  }

  public isFileSelected(): boolean {
    return this.file !== undefined;
  }

  public xlsxToJson(): void {
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      const data = new Uint8Array(fileReader.result as ArrayBuffer);
      const arr = new Array();
      for (let i = 0; i !== data.length; ++i) { arr[i] = String.fromCharCode(data[i]); }
      const bstr = arr.join('');
      const workbook = XLSX.read(bstr, { type: 'binary' });
      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];
      const json = XLSX.utils.sheet_to_json(worksheet, { raw: true });
      this.subjects = JSON.parse(JSON.stringify(json));
    };
    fileReader.readAsArrayBuffer(this.file as Blob);
  }

}