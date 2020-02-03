import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeServiceService } from './employee-service.service';

import { HttpClientModule } from '@angular/common/http';
import { commonComponents } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    commonComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EmployeeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
