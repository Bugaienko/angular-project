import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ObjectListRoutingModule} from "../objects-list/objects-list-routing.module";
import { PostItemComponent } from './service/post-item/post-item.component';



@NgModule({
  declarations: [
    // PostItemComponent,
  ],
  imports: [
    CommonModule,
    ObjectListRoutingModule
  ]
})
export class ObjectListModule { }
