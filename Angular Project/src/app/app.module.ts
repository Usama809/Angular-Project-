import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponenet } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './Shared/shared.module';
import { CoreModule } from './core.module';
import { LoggingService } from './logging.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponenet,  
     
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    CoreModule

  ],
  bootstrap: [AppComponent],
  // providers : [LoggingService]
})
export class AppModule { }
