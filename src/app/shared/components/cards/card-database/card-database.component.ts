import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { IDatabase, IProject, ITypeDatabase } from '@data/interfaces';
import { CurrentProjectService } from '@modules/projects/services';
import { DatabasesService } from '@modules/databases/services/databases.service';

@Component({
  selector: 'app-card-database',
  templateUrl: './card-database.component.html',
  styleUrls: ['./card-database.component.css']
})
export class CardDatabaseComponent implements OnInit {

  @Input()
  database!: ITypeDatabase;
  proyecto: IProject = this.currentProjectService.currentProjectSubjectValue;
  exist = false;

  constructor(
    private currentProjectService: CurrentProjectService,
    private databaseService: DatabasesService
  ) { }

  ngOnInit(): void {
    this.existDatabase();
  }

  public existDatabase(): void {
    this.databaseService
      .getSearchDatabaseContext(this.proyecto.context)
      .subscribe((database: IDatabase) => {
        this.exist = Object.entries(database).length !== 0;
      });
  }

  public createDatabase(): void {
    this.databaseService
      .createDatabase(this.proyecto.context, this.database.id)
      .subscribe((database: IDatabase) => this.exist = true);
  }

}
