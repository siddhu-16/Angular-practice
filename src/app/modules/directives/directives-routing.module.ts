import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesComponent } from './directives.component';

const routes: Routes = [
  {path:'directives',component:DirectivesComponent},
  { path: '', redirectTo: 'directives', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectivesRoutingModule { }
