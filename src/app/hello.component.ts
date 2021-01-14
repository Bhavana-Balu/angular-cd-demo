import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChange,
  SimpleChanges
} from "@angular/core";

@Component({
  selector: "hello",
  template: `
    <h1>Hello {{ name.value }}!</h1>
    <button (click)="btnClick($event)">
      hello click me
    </button>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.Default
})
export class HelloComponent {
  @Input() name: any;
  @Input() test: any;
  @Output() eventEmitter = new EventEmitter();

  constructor(private cdr: ChangeDetectorRef) {
    // this.cdr.detach()
    console.log('HelloComponent ChangeDetectorRef ',this.cdr);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("HelloComponent ngOnChanges ", changes);
  }

  ngDoCheck() {
    // this.name.value='test val from hello comp';
    console.log("do check hello comp");
  }

  ngAfterViewInit() {
    this.name.value = "test val from hello comp";
    console.log("ngAfterViewInit hello comp");
    //  this.cdr.markForCheck()
  }

  ngAfterViewChecked() {
    console.log("HelloComponent ngAfterViewChecked");
    // this.eventEmitter.emit('test from hello comp');
  }

  btnClick(event) {
    event.stopPropagation();
    console.log("HelloComponent btn click");
    //  this.name.value='test val from hello comp';
    this.eventEmitter.emit("test from hello comp");
  }
}
