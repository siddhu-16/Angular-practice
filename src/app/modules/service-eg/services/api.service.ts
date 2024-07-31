import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'https://seo-server.onrender.com/api';

  myData = {
    'URL' : 'https://www.youtube.com/'
  }


  constructor(private http : HttpClient) { }
  postData(url:any){
    this.myData.URL = url
    return this.http.post<any>(`${this.baseUrl}/`,this.myData);
  }
}
