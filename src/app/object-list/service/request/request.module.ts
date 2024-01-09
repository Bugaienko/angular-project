import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RequestRoutingModule} from './request-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {PostService} from "../post.service";
import {PostListComponent} from "../post-list/post-list.component";
import {PostItemComponent} from "../post-item/post-item.component";


@NgModule({
  declarations: [
    PostListComponent,
    PostItemComponent,
  ],
  imports: [
    CommonModule,
    RequestRoutingModule,
    HttpClientModule,
  ],
  providers: [
    PostService
  ],
})
export class RequestModule {
}
