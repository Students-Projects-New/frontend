import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { IProject } from '@data/interfaces';
import { ProjectService } from '@modules/projects/services/project.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {

  projects: IProject[];
  private unsubscribe$ = new Subject<void>();

  constructor(
    private projectService: ProjectService
  ) {
    this.projects = [];
  }

  ngOnInit(): void {
    this.loadProjects();
  }

  public loadProjects(): void {
    this.projectService
      .getProjects('1')
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((res: IProject[]) => {
        this.projects = res;
      });
  }

  public deleteProject(id: any): void {
    this.projectService
      .deleteProject(id)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((res) => {
        console.log(res);
      });
  }

  public trackByFn(index: number, item: IProject): number {
    return item.id;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
