import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdToolbarModule,
  MdCardModule,
  MdButtonModule,
  MdInputModule
} from '@angular/material';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactService } from './contact.service';
import { ContactClientService } from './contact-client.service';
import { coreInterceptorProvider } from './core-interceptor.service';
import { requestOptionsProvider } from './core-request-options.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactCardComponent,
    CreateContactComponent,
    DashBoardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    MdToolbarModule,
    MdCardModule,
    MdButtonModule,
    MdInputModule
  ],
  providers: [
    ContactService,
    ContactClientService,
    requestOptionsProvider,
    coreInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
