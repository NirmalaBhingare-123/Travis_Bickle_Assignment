import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  output:any;
  msg:any;
  constructor(private authservice:AuthServiceService,private route:Router) { }

  ngOnInit(): void {
  }

  checkLogin(name:string,pass:string){
   this.output=this.authservice.checkUserPassValues(name,pass);
   if(this.output==true){
     this.route.navigate(['/home']);
   }else{
     alert("Invalid Credentials");
   }
  }
}
