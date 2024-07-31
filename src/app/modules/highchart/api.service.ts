import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval, Observable, switchMap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'https://demo-live-data.highcharts.com/time-rows.json'
  constructor(private http:HttpClient) { }
  getdata():Observable<any>{
    return interval(3000).pipe(
      switchMap(() => this.http.get(this.baseUrl))
    ) 
  }
}
