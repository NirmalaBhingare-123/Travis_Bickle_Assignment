import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }
  checkUserPassValues(uname:string,upass:string){
    if(uname== "admin@gmail.com" && upass=="admin123"){
      localStorage.setItem("username","admin");
      return true;
    }else{
      return false;
    }

  }
}
