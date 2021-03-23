import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { WebComponent } from './web/web.component';
import { JavaComponent } from './java/java.component';
import { TechRoutingModule } from './tech-routing/tech-routing.module';
import { DirectivesDirective } from './directives.directive';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { FilterPipe } from './filter.pipe';
import { SortPipe } from './sort.pipe';
import { HttpClientModule } from '@angular/common/http';
import { JavascriptComponent } from './javascript/javascript.component';
import { AngularComponent } from './angular/angular.component';
import { CorejavaComponent } from './corejava/corejava.component';
import { AdvjavaComponent } from './advjava/advjava.component';
import { MyFromComponent } from './my-from/my-from.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BuilderFormsComponent } from './builder-forms/builder-forms.component';
import { ModelDrivenComponent } from './model-driven/model-driven.component';
import { HomeComponent } from './home/home.component';
import { ReviewComponent } from './review/review.component';
import { FictionComponent } from './fiction/fiction.component';
import { ActionComponent } from './action/action.component';
import { AutoComponent } from './auto/auto.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UpdateFictionComponent } from './update-fiction/update-fiction.component';
import { LoginComponent } from './login/login.component';
import { PassComponent } from './pass/pass.component';
import { LoginNavBarComponent } from './login-nav-bar/login-nav-bar.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';


import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient} from '@angular/common/http';
 
export function HttpLoaderFactory(http:HttpClient){
 return new TranslateHttpLoader(http, './assets/i18n/', '.json')
}



@NgModule({
  declarations: [
    AppComponent,
    WebComponent,
    JavaComponent,
    DirectivesDirective,
    ProductDetailsComponent,
    CustomerDetailsComponent,
    FilterPipe,
    SortPipe,
    JavascriptComponent,
    AngularComponent,
    CorejavaComponent,
    AdvjavaComponent,
    MyFromComponent,
    BuilderFormsComponent,
    ModelDrivenComponent,
    HomeComponent,
    ReviewComponent,
    FictionComponent,
    ActionComponent,
    AutoComponent,
    FooterComponent,
    NavBarComponent,
    UpdateFictionComponent,
    LoginComponent,
    PassComponent,
    LoginNavBarComponent
   
   
  ],
  imports: [
    BrowserModule,TechRoutingModule,HttpClientModule, FormsModule, ReactiveFormsModule, TranslateModule.forRoot({
      loader:{
      provide:TranslateLoader,
      useFactory:HttpLoaderFactory,
      deps:[HttpClient]
      }
      })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
