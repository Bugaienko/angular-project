import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  public obj: string = 'title'

  public handleEvent(value: string) {
    this.obj = value;
  }
}
