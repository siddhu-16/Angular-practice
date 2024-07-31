import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormsComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    ReactiveFormsModule,
    MatCardModule
  ]
})
export class FormsModule { }
