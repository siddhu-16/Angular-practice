import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceEgRoutingModule } from './service-eg-routing.module';
import { ServiceEgComponent } from './service-eg.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ServiceEgComponent,
    OneComponent,
    TwoComponent
  ],
  imports: [
    CommonModule,
    ServiceEgRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class ServiceEgModule { }
