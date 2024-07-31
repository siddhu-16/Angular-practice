import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DecoratorsComponent } from './decorators.component';

const routes: Routes = [
  {path:'deco' , component:DecoratorsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DecoratorsRoutingModule { }
