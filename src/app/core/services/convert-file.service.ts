import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class ConvertFileService {

  constructor() { }

  public convertToJson(file: File): Promise<any> {
    return new Promise((resolve, reject) => {
      const reader: FileReader = new FileReader();
      reader.readAsArrayBuffer(file as Blob);
      reader.onload = () => {
        const arrayBuffer: ArrayBuffer = reader.result as ArrayBuffer;
        const data = new Uint8Array(arrayBuffer);
        const arr = new Array();
        for (let i = 0; i !== data.length; ++i) { arr[i] = String.fromCharCode(data[i]); }
        const bstr = arr.join('');
        const workbook = XLSX.read(bstr, { type: 'binary' });
        const firstSheet = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheet];
        const json = XLSX.utils.sheet_to_json(worksheet, { raw: true });
        resolve(json);
      };
      reader.onerror = (error) => reject(error);
    });
  }

  public convertToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader: FileReader = new FileReader();
      reader.readAsDataURL(file as Blob);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  }

  public convertToFormData(data: any): FormData {
    const formData = new FormData();
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        formData.append(key, data[key]);
        console.log(key, data[key]);
      }
    }
    return formData;
  }

  public convertTxtToJson(file: File): Promise<string[]> {
    return new Promise((resolve, reject) => {
      const reader: FileReader = new FileReader();
      reader.readAsText(file as Blob);
      reader.onload = () => {
        const text: string = reader.result as string;
        const emails: string[] = text.split(',').map((email: string) => email.trim());
        resolve(emails);
      };
      reader.onerror = (error) => reject(error);
    });
  }

}
