import { Component, OnInit } from '@angular/core';

import { LogMessage as NgxLogMessage } from 'ngx-log-monitor';
import { LogsService } from '@modules/projects/services/logs.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {

  projectId!: string;
  logs: NgxLogMessage[] = [];

  constructor(
    private logsService: LogsService
  ) { }

  ngOnInit(): void { }

  public getBuildLogs(id: string): void {
    this.logsService
      .getBuildLogs(id)
      .subscribe((logs: NgxLogMessage[]) => {
        this.logs = logs;
        console.log(logs);
      });
  }

  public getDeployLogs(id: string): void {
    this.logsService
      .getDeployLogs(id)
      .subscribe((logs: NgxLogMessage[]) => {
        this.logs = logs;
        console.log(logs);
      });
  }

}
