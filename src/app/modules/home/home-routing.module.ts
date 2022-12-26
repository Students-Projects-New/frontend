import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';

const HOME_ROUTES: Routes = [
  {
    path: '',
    children: [
      { path: '', component: HomePageComponent, title: 'Home' },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(HOME_ROUTES)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
  static components = [HomePageComponent];
}
