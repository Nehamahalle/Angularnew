import { Injectable } from '@angular/core';
import { ILogin } from './i-login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  public signIn(loginData: ILogin) {
    localStorage.setItem('ACCESS_TOKEN', "access_token");
  }
  public isLoggedIn() {
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }
  public logout() {
    localStorage.removeItem('ACCESS_TOKEN');
  }
}
