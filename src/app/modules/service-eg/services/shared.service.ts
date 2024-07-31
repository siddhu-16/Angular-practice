import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private sub:Subject<any> = new Subject<any>();
  obv:Observable<any> = this.sub.asObservable()
  constructor() { }
  getData(data:any){
    this.sub.next(data);
    
  }
}
