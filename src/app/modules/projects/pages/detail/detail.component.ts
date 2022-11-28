import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CurrentProjectService } from '@modules/projects/services/current-project.service';
import { IProject } from '@data/interfaces';

@Component({
  selector: 'app-project-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  private id!: number;
  public project!: IProject;

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

}
