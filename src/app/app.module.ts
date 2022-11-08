import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF, LocationStrategy, PathLocationStrategy } from '@angular/common';

import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';

const COMPONENTS = [
  AppComponent,
  AdminLayoutComponent
];

const MODULES = [
  BrowserModule,
  AppRoutingModule,
  CoreModule,
  SharedModule
];

const PROVIDERS = [
  { provide: APP_BASE_HREF, useValue: '/students-projects' },
  { provide: LocationStrategy, useClass: PathLocationStrategy }
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
  providers: [...PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
