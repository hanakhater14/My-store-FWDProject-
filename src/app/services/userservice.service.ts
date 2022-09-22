import { Injectable } from '@angular/core';
import { user } from 'src/models/user';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
user:user;
  constructor() { 
    this.user={
      fullName:"",
      totalCartPrice:0
    }
  }

  setUserData(user:user){
    this.user=user;
  }

  getUserData(){
    return this.user;
  }
}
