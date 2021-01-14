import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { delay } from "rxjs/operators";

@Injectable({providedIn:'root'})
export class AppService{
  get(){
    return of(1,2,3).pipe(delay(1000))
  }
}