import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  showLogsBuild: boolean;
  showLogsDeploy: boolean;

  constructor() {
    this.showLogsBuild = false;
    this.showLogsDeploy = true;
  }

  ngOnInit(): void {
  }

  public getLogs(showLogsBuild: boolean, showLogsDeploy: boolean): void {
    this.showLogsBuild = showLogsBuild;
    this.showLogsDeploy = showLogsDeploy;
  }

}
