import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceEgComponent } from './service-eg.component';

const routes: Routes = [
  {
    path: 'service', component:ServiceEgComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceEgRoutingModule { }
