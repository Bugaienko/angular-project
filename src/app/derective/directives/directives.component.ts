import {Component} from '@angular/core';

@Component({
  selector: 'app-derectives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent {

  // Структурные директивы

  //ngFor

  public colors: string[] = ['red', 'blue', 'yellow', 'green'];

  //ngIf

  public isShow = true;

  //ngSwitch

  public currentColor: string = this.colors[0];

  // Атрибутные директивы

  //ngStyle
  public elementStyle: any = {
    color: 'red',
    opacity: 0.5
  }


  //ngClass


}
