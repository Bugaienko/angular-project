import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesRoutingModule } from './pipes-routing.module';
import {PipeItemComponent} from "../components/pipe-item/pipe-item.component";
import {MyCustomPipe} from "../pipeItems/my-custom.pipe";


@NgModule({
  declarations: [
    PipeItemComponent,
    MyCustomPipe
  ],
  imports: [
    CommonModule,
    PipesRoutingModule,

  ]
})
export class PipesModule { }
