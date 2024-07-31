import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighchartRoutingModule } from './highchart-routing.module';
import { HighchartComponent } from './highchart.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HighchartComponent
  ],
  imports: [
    CommonModule,
    HighchartRoutingModule,
    HttpClientModule
  ]
})
export class HighchartModule { }
