import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [...HomeRoutingModule.components],
  imports: [HomeRoutingModule]
})
export class HomeModule { }
