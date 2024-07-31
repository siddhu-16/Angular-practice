import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DirectivesModule } from './modules/directives/directives.module';
import { DecoratorsModule } from './modules/decorators/decorators.module';
import { ServiceEgModule } from './modules/service-eg/service-eg.module';
import { FormsModule } from './modules/forms/forms.module';
import { HighchartModule } from './modules/highchart/highchart.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    DirectivesModule,
    DecoratorsModule,
    ServiceEgModule,
    FormsModule,
    HighchartModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
