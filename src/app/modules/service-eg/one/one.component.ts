import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  text1 = 'This is example of service'
  constructor(private _service : SharedService) { }

  ngOnInit(): void {
    this._service.getData(this.text1)
  }

}
