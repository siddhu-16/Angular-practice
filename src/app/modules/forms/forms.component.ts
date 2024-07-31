import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
 
})

export class FormsComponent implements OnInit {
  myData : FormGroup;
  userData : any;
  ImageUrl = '../assets/cartoon.svg'
  show = false 
  onSubmit() {
    console.log(this.myData.value);
    
    this.show = true
    this.userData = this._auth.logIn(this.myData.value.email,this.myData.value.password)
    console.log(this.userData);
    
  }

  constructor(private formBuilder : FormBuilder, private _auth:AuthService) {


    this.myData = this.formBuilder.group({
        email : new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)]),
        password : new FormControl('',[Validators.required,Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)])
        
      })


      
   }


  ngOnInit(): void {
  }

}
