import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MyCalculatorComponent} from "./my-calculator/my-calculator.component";
import {MyEmptyPage} from "./empty-route/my-empty-page.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'calculator',
    pathMatch: "full"
  },
  {
    path: 'calculator',
    component: MyCalculatorComponent,
  },
  {
    path: '**',
    component: MyEmptyPage
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
