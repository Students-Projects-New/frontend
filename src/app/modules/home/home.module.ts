import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [
    ...HomeRoutingModule.components
  ],
  imports: [
    HomeRoutingModule,
    SharedModule,
  ]
})
export class HomeModule { }
