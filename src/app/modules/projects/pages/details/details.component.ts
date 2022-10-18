import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LogMessage as NgxLogMessage } from 'ngx-log-monitor';
import { LogsService } from '@modules/projects/services/logs.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  projectId!: string;
  build: NgxLogMessage[];
  deploy: NgxLogMessage[];

  constructor(
    private logsService: LogsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.build = [];
    this.deploy = [];
  }

  ngOnInit(): void {
    this.projectId = this.route.snapshot.params['id'];
    this.getBuildLogs(this.projectId);
    this.getDeployLogs(this.projectId);
  }

  public getBuildLogs(id: string): void {
    this.logsService
      .getBuildLogs(id)
      .subscribe((logs: NgxLogMessage[]) => {
        this.build = logs;
        console.log(logs);
      });
  }

  public getDeployLogs(id: string): void {
    this.logsService
      .getDeployLogs(id)
      .subscribe((logs: NgxLogMessage[]) => {
        this.deploy = logs;
        console.log(logs);
      });
    this.refreshDeployLogs();
  }

  public refreshDeployLogs(): void {
    setTimeout(() => {
      this.getDeployLogs(this.projectId);
    }, 60000);
  }

  public onBack(): void {
    this.router.navigate(['/projects']);
  }

}
