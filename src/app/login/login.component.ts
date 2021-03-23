import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  constructor(private router: Router) {}
 username:string
 password:string
userForm:any;
 login(){
 if(this.username=="Admin" && this.password=="Password"){
   console.log("hi")
 // window.location.href= '/pass';
   this.router.navigate(['/home']);
 }
 else{
   alert("Invalid User")
 }
}

}
