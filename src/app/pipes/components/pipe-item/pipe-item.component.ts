import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-item',
  standalone: false,
  templateUrl: './pipe-item.component.html',
  styleUrl: './pipe-item.component.scss',

})
export class PipeItemComponent {

  //DataPipe
  //UpperCase
  //LowerCase
  //CurrencyPipe
  //DecimalPipe
  //PercentPipe

  public name = 'Angular test pipes'
  public surname = 'DEVEloper'

  public date = new Date().toDateString();
}
