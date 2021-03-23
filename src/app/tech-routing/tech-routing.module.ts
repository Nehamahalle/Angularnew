import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router'
import { WebComponent } from "src/app/web/web.component";
import { JavaComponent } from "src/app/java/java.component";
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { JavascriptComponent } from '../javascript/javascript.component';
import { AngularComponent } from '../angular/angular.component';
import { CorejavaComponent } from '../corejava/corejava.component';
import { AdvjavaComponent } from '../advjava/advjava.component';
import { MyFromComponent } from '../my-from/my-from.component';
import { BuilderFormsComponent } from '../builder-forms/builder-forms.component';
import { ModelDrivenComponent } from '../model-driven/model-driven.component';
import { HomeComponent } from '../home/home.component';
import { ReviewComponent } from '../review/review.component';
import { FictionComponent } from '../fiction/fiction.component';
import { AutoComponent } from '../auto/auto.component';
import { ActionComponent } from '../action/action.component';
import { FooterComponent } from '../footer/footer.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { PassComponent } from '../pass/pass.component';
import { AppComponent } from '../app.component';
import { LoginComponent } from '../login/login.component';


 
const routes:Routes = [
 { path:'web', component:WebComponent,
 children:[
    {path:'javascript', component:JavascriptComponent},
    {path:'angular', component:AngularComponent}, 
    ]},
 { path:'java', component:JavaComponent,
 children:[
   //  {path:'coreJava', component:CorejavaComponent},
   //  {path:'advJava', component:AdvjavaComponent}, 
     
    { path:'fiction', component:FictionComponent},
    { path:'auto', component:AutoComponent},
    { path:'action', component:ActionComponent},
    ]},
 { path:'customer-details', component:CustomerDetailsComponent},
 { path:'product-details', component:ProductDetailsComponent},
 { path:'templateDriven', component:MyFromComponent},
 { path:'builderForms', component:BuilderFormsComponent},
 { path:'modeldriven', component:ModelDrivenComponent},
 { path:'home', component:HomeComponent},
 { path:'review', component:ReviewComponent},
 { path:'fiction', component:FictionComponent},
 { path:'footer', component:FooterComponent},
 { path:'nav', component:NavBarComponent},
 { path:'pass', component:PassComponent},
 { path:'app', component:AppComponent},
 { path:'login', component:LoginComponent},
 { path: '', redirectTo: 'login', pathMatch: 'full' },
]
 
@NgModule({
 declarations: [],
 imports: [
 RouterModule.forRoot(routes),
 CommonModule
 ],
 exports: [RouterModule]
})
export class TechRoutingModule { }
export const routingComponents = [LoginComponent,AppComponent,PassComponent,NavBarComponent,FooterComponent,AutoComponent,ActionComponent,FictionComponent,WebComponent, ModelDrivenComponent,JavaComponent,BuilderFormsComponent,CustomerDetailsComponent,ProductDetailsComponent,CorejavaComponent, AdvjavaComponent, MyFromComponent,JavascriptComponent, AngularComponent]
