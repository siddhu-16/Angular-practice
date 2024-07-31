import { Component, OnInit } from '@angular/core';
import { SharedService } from '../service-eg/services/shared.service';


@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  isSpecial = true;
  text1 = ''
  text2 = ''
  text3 = 'String Interpolation is a one-way databinding technique which is used to output the data from a TypeScript code to HTML template (view). It uses the template expression in double curly braces to display the data from the component to the view'
  itemImageUrl = '../assets/cartoon.svg'
  constructor() { }

  ngOnInit(): void {
     
  }



  onChange() {
    this.text2 = this.text1;
  }
  onClick() {

    this.setCurrentStyles();


  }

  currentStyles: Record<string, string> = {};

  setCurrentStyles() {

    this.currentStyles = {
      'font-style': this.isSpecial ? 'italic' : 'normal',
      'font-weight': !this.isSpecial ? 'bold' : 'normal',
      'font-size': this.isSpecial ? '24px' : '12px',
    };

  }

}
