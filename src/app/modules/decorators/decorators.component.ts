import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decorators',
  templateUrl: './decorators.component.html',
  styleUrls: ['./decorators.component.css']
})
export class DecoratorsComponent implements OnInit {
updateData(event: any) {
  this.text2 = event
}

  text1 = 'Hello World'
  text2 = ''

  date = new Date();
  a: number = 0.259;
  b: number = 1.3495;
  constructor() { }

  ngOnInit(): void {
  }

}
