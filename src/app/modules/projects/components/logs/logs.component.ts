import { Component, Input, OnInit } from '@angular/core';

import { LogMessage as NgxLogMessage } from 'ngx-log-monitor';
import { CurrentProjectService } from '@app/modules/projects/services/current-project.service';
import { LogsService } from '@modules/projects/services/logs.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {

  @Input() logType!: string;
  private idProject!: number;
  public logs: NgxLogMessage[] = [];

  constructor(
    private currentProjectService: CurrentProjectService,
    private logsService: LogsService
  ) { }

  ngOnInit(): void {
    this.getIdProjectValue();
  }

  private getIdProjectValue(): void {
    this.currentProjectService.currentProjectValue
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
    this.refreshLogs();
  }

  private refreshLogs(): void {
    setInterval(() => {
      this.getDeployLogs(String(this.idProject));
    }, 10000);
  }

}
