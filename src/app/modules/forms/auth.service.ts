import { Injectable } from '@angular/core';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _user:UserService,private router:Router) { }
  isLogged = false;
  logIn(email:any,password:any){

    const user = this._user.users.find((user) => user.email === email && user.password === password)
    if(user === undefined){
      alert("Invalid email or password");
      
    }else{
      
      this.isLogged = true;

      alert("Welcome : " + user.email)
    }

   return user

  }

  logOut(){
    this.isLogged = false;
  }
  isLogIn(){
    return this.isLogged;
  }
}
