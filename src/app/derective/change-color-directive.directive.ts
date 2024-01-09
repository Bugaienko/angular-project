import {AfterViewInit, Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[ChangeColor]'
})
export class ChangeColorDirectiveDirective implements AfterViewInit{

  // colors = ['red', 'blue', 'yellow', 'green', 'magenta'];

  @Input('ChangeColor') colors?: string[]

  private _el: ElementRef;

  constructor(el: ElementRef) {
    this._el = el;
  }

  private changeColor(el: ElementRef) {
    if (this.colors && this.colors.length !== 0) {
          setInterval(() => {
        el.nativeElement.style.color = this.colors![Math.floor(Math.random() * this.colors!.length)]
      }, 2000)
    }
  }

  ngAfterViewInit(): void {
    this.changeColor(this._el);
  }

}
