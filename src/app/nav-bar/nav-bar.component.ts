import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TranslateService} from '@ngx-translate/core'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent  {
  logout() {
    this.router.navigate(['/login'])
  }

   constructor(private translateService: TranslateService,private router: Router){
     translateService.setDefaultLang('en');
     }
    
     changeLocale(locale:string){
     this.translateService.use(locale)
   }
    }


