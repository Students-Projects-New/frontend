import { Component, OnDestroy, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { LogMessage as NgxLogMessage } from 'ngx-log-monitor';
import { CurrentProjectService } from '@modules/projects/services';
import { LogsService } from '@modules/projects/services';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit, OnDestroy {

  @Input() logType!: string;
  private idProject: number;
  private subscription$: Subscription;
  public logs: NgxLogMessage[];

  constructor(
    private currentProjectService: CurrentProjectService,
    private logsService: LogsService
  ) {
    this.idProject = 0;
    this.subscription$ = new Subscription();
    this.logs = [];
  }

  ngOnInit(): void {
    this.getIdProjectValue();
  }

  private getIdProjectValue(): void {
    this.subscription$ = this.currentProjectService
      .currentProjectValue
      .subscribe((project) => {
        this.idProject = project.id;
        if (this.idProject) {
          this.getLogs();
        }
      });
  }

  private getLogs(): void {
    if (this.logType === 'build') {
      this.getBuildLogs(String(this.idProject));
    } else if (this.logType === 'deploy') {
      this.getDeployLogs(String(this.idProject));
    }
  }

  private getBuildLogs(id: string): void {
    this.logsService
      .getBuildLogs(id)
      .subscribe((logs: NgxLogMessage[]) => {
        this.logs = logs;
      });
  }

  private getDeployLogs(id: string): void {
    this.logsService
      .getDeployLogs(id)
      .subscribe((logs: NgxLogMessage[]) => {
        this.logs = logs;
      });
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
    this.logs = [];
    this.idProject = 0;
    this.logType = '';
  }

}
