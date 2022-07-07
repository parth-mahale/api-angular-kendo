import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Net5ApicallComponent } from './net5-apicall/net5-apicall.component';

const routes: Routes = [
  {path: 'EmployeeData', component: Net5ApicallComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
