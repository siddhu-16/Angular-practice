import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DecoratorsRoutingModule } from './decorators-routing.module';
import { DecoratorsComponent } from './decorators.component';
import { ChildComponent } from './child/child.component';


@NgModule({
  declarations: [
    DecoratorsComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    DecoratorsRoutingModule
  ]
})
export class DecoratorsModule { }
