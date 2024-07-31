import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() item = '';
  @Output() data = new EventEmitter<any>();
  constructor() { }
 
  ngOnInit(): void {
    this.data.emit("Hello From Child")
  }

}
