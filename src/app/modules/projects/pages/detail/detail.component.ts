import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CurrentProjectService } from '@modules/projects/services';
import { IProject } from '@data/interfaces';

@Component({
  selector: 'app-project-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, OnDestroy {

  private id: number = 0;
  public project: IProject = {} as IProject;

  constructor(
    private route: ActivatedRoute,
    private currentProjectService: CurrentProjectService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    this.getProject();
  }

  private getProject(): void {
    this.currentProjectService
      .getCurrentProject(this.id)
      .subscribe((project: IProject) => {
        this.project = project;
      });
  }

  public onBack(): void {
    this.router.navigate(['/projects']);
  }

  ngOnDestroy(): void {
    this.currentProjectService.clearCurrentProject();
  }

  public isProjectEmpty(): boolean {
    return Object.keys(this.project).length !== 0;
  }

}
