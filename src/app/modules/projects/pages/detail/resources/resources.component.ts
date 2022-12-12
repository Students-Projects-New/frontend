import { Component, OnInit } from '@angular/core';

import { ITypeDatabase } from '@data/interfaces';
import { DatabaseTypesService } from '@modules/projects/services/database-types.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  public databases: ITypeDatabase[] = [];

  constructor(
    private databaseTypesService: DatabaseTypesService
  ) { }

  ngOnInit(): void {
    this.getDatabaseTypes();
  }

  private getDatabaseTypes(): void {
    this.databaseTypesService
      .getDatabaseTypes()
      .subscribe((databases: ITypeDatabase[]) => {
        this.databases = databases;
      });
  }

}
