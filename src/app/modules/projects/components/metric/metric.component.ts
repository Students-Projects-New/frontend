import { Component, OnInit } from '@angular/core';

import { CurrentProjectService } from '../../services/current-project.service';
import { MetricsService } from '../../services/metrics.service';
import { Chart, registerables } from 'chart.js'

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.css']
})
export class MetricComponent implements OnInit {

  constructor(
    private currentProjectService: CurrentProjectService,
    private metricsService: MetricsService
  ) { }

  ngOnInit(): void {
    this.getMetrics();
  }

  getMetrics(): void {
    const idProject = this.currentProjectService.currentProjectSubjectValue.id;
    this.metricsService
      .getMetrics(idProject)
      .subscribe(metrics => {
        this.setData(metrics);
      });
  }

  public setData(data: any): void {
    const cpu: any = [];
    const memory: any = [];
    const labels: any = [];
    data.forEach((item: any) => {
      cpu.push(item.cpu_perc);
      memory.push(item.mem_perc);
      labels.push(new Date(item.created_at).toLocaleDateString());
    });
    this.drawChart({ cpu, memory, labels });
  }

  drawChart(metrics: any): void {
    Chart.register(...registerables);
    const ctx = document.getElementById('metrics') as HTMLCanvasElement;
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: metrics.labels,
        datasets: [{
          label: 'CPU Usage',
          data: metrics.cpu,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        },
        {
          label: 'Memory Usage',
          data: metrics.memory,
          fill: false,
          borderColor: 'rgb(255, 99, 132)',
          tension: 0.1
        }]
      },
      /*options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }*/
    });
  }

}
