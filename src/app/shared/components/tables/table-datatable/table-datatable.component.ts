import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-datatable',
  templateUrl: './table-datatable.component.html',
  styleUrls: ['./table-datatable.component.css']
})
export class TableDatatableComponent implements OnInit {

  public rows: any[] = [];
  public columns: any[] = [];
  public limit: number = 10;

  constructor() { }

  ngOnInit(): void {
  }

}
