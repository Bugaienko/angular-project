import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ObjectListComponent} from "../object-list/object-list.component";
import {ItemComponent} from "../item/item.component";
import {ObjectListRoutingModule} from "./objects-list-routing.module";



@NgModule({
  declarations: [
    ObjectListComponent,
    ItemComponent,

  ],
  imports: [
    CommonModule,
    ObjectListRoutingModule
  ],
  exports: [
    ObjectListComponent,
    ItemComponent
  ],
})
export class ObjectsListModule {

}
