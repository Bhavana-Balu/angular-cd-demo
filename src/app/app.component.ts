import { ChangeDetectorRef, Component, VERSION } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { AppService } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
})
export class AppComponent  { 
  name = {value:'Angular ' + VERSION.major};
  emittedVal='initial val';
  obsVal=0;
  testHello='';

  constructor(private appService:AppService,private cdr:ChangeDetectorRef){
 console.log('AppComponent ChangeDetectorRef ',this.cdr);
  }

  eventHandler(event){
    console.log('app comp event emitter')
    this.emittedVal=event;
  }

  ngDoCheck(){
    // this.name.value='test val from hello comp';
    console.log('do check AppComponent')
  }

  ngOnInit(){
    console.log('AppComponent on init')
    // this.appService.get().subscribe(s=>{
    //   console.log(s)
    //   this.obsVal=s;
    // })
  }

   ngAfterViewChecked(){
    console.log('AppComponent ngAfterViewChecked');
  }

  divClick(){
    console.log('div clicked from app comp')
  }

  btnClick(){
   console.log('AppComponent btn click');
   this.name.value ='Angular ' + VERSION.minor;
  //  this.testHello='test';
    // setTimeout(() => {
    //   console.log("AppComponent timeout cb");
    //    this.name={value:'Angular ' + VERSION.minor};
    // }, 1000);
  }
}
