import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesRoutingModule } from './directives-routing.module';
import { DirectivesComponent } from './directives.component';
import {ChangeColorDirectiveDirective} from "../change-color-directive.directive";
import {IfElseDirectiveDirective} from "../if-else-directive.directive";


@NgModule({
  declarations: [
    DirectivesComponent,
    ChangeColorDirectiveDirective,
    IfElseDirectiveDirective
  ],
  imports: [
    CommonModule,
    DirectivesRoutingModule

  ]
})
export class DirectivesModule { }
