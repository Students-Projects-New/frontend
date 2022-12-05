import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccessComponent } from './access/access.component';
import { ActivityComponent } from './activity/activity.component';
import { OverviewComponent } from './overview/overview.component';
import { PhasesComponent } from './phases/phases.component';
import { ResourcesComponent } from './resources/resources.component';
import { MetricsComponent } from './metrics/metrics.component';
import { DeploymentsComponent } from './deployments/deployments.component';
import { SettingsComponent } from './settings/settings.component';

import { DetailComponent } from './detail.component';

const routes: Routes = [
  {
    path: '',
    component: DetailComponent,
    children: [
      {
        path: 'overview',
        component: OverviewComponent,
        title: 'Resumen'
      },
      {
        path: 'resources',
        component: ResourcesComponent,
        title: 'Recursos'
      },
      {
        path: 'phases',
        component: PhasesComponent,
        title: 'Fases'
      },
      {
        path: 'metrics',
        component: MetricsComponent,
        title: 'Métricas'
      },
      {
        path: 'activity',
        component: ActivityComponent,
        title: 'Actividad'
      },
      {
        path: 'access',
        component: AccessComponent,
        title: 'Acceso'
      },
      {
        path: 'deployments',
        component: DeploymentsComponent,
        title: 'Despliegues'
      },
      {
        path: 'settings',
        component: SettingsComponent,
        title: 'Configuración'
      },
      { path: '', redirectTo: 'overview', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailRoutingModule {
  static components = [
    AccessComponent,
    ActivityComponent,
    OverviewComponent,
    PhasesComponent,
    ResourcesComponent,
    MetricsComponent,
    DeploymentsComponent,
    SettingsComponent
  ];
}
