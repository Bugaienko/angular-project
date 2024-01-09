import {
  AfterContentInit,
  AfterViewInit,
  Component,
  DoCheck,
  EventEmitter,
  Input, OnChanges,
  OnDestroy,
  OnInit,
  Output, SimpleChanges
} from '@angular/core';





@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, DoCheck, AfterContentInit, AfterViewInit, OnDestroy, OnChanges {
  @Input() title?: string;
  public tempTitle!: string;

  // 1-й
  constructor() {
    console.log('%cConstructor', 'color: red');
  }

  //Сразу после конструктора. Вызывается каждый раз, когда изменяются параметры Input
  ngOnChanges(changes: SimpleChanges): void {
    console.log('%cOnChanges', 'color: yellow')
    console.log(changes)
  }



  @Output() eventChange = new EventEmitter<string>()

  // 2-й в очереди
  ngOnInit(): void {
    console.log('%cOnInit', 'color: blue');

    if (this.title) {
      this.tempTitle = this.title;
      console.log(this.tempTitle);
    }
  }

  // 3-й в очереди. Опасный и бесполезный. При каждом изменении компонента вызывается
  ngDoCheck(): void {
    console.log('%cDoCheck', 'color: orange');
  }

  //4-й прокидываются значения в контексте
  ngAfterContentInit(): void {
    console.log('%cContentInit', 'color: green');
  }

  //5-й когда вся цепочка наследников/компонентов отрисуются
  ngAfterViewInit(): void {
    console.log('%cAfterViewInit', 'color: purple');
  }

  // Скрылся, исчез компонент. В момент начала уничтожения
  ngOnDestroy(): void {
    console.log('%cOnDestroy', 'color: lime')
  }







  public clickHandler() {
    this.tempTitle = 'I am mutable'
    this.eventChange.emit(this.tempTitle)
  }
}
