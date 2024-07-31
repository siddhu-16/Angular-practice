import { Component, OnInit } from '@angular/core';
import { SharedService } from './services/shared.service';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-service-eg',
  templateUrl: './service-eg.component.html',
  styleUrls: ['./service-eg.component.css']
})
export class ServiceEgComponent implements OnInit {

  text1: any;
  seoData:any
  show = false
  constructor(private _service:SharedService,private _api:ApiService){ }
  data:any;
  ngOnInit(): void {
    this._service.obv.subscribe(data =>{
      this.data = data
     console.log(this.data);
     
    })

  }
  getData(){
    this._api.postData(this.text1).subscribe(data=>{
      this.seoData = data;
      // console.log(this.seoData);
      // console.log("Design:" + this.seoData.design);
      // console.log("href:" + this.seoData.href);
      // console.log("structure:" + this.seoData.structure);
      // console.log( this.seoData.metaInfo);
      // console.log(this.seoData.internalLinks);
      // console.log( this.seoData.externalLinks);
      this.show = true
    })
    
  }
}
