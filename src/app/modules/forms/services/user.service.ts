import { Injectable } from '@angular/core';
import { User } from '../model/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  users: User[] = [
    new User('2','abc2@gmail.com','asdf@1233'),
    new User('1','abc1@gmail.com','asdf@1233'),
    new User('3','abc3@gmail.com','asdf@1233'),
    new User('4','abc4@gmail.com','asdf@1233'),
    new User('5','abc5@gmail.com','asdf@1233'),
    new User('6','abc6@gmail.com','asdf@1233')
  ]
}
