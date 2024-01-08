import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ObjectListComponent} from "../object-list/object-list.component";
import {ItemComponent} from "../item/item.component";

const routes: Routes = [
  {
    path: '',
    component: ObjectListComponent
  },
  {
    path: ':id',
    component: ItemComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObjectListRoutingModule { }
