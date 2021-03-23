import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IReview } from './i-review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private url:string = "../assets/Review.json"; 
  //private url:string = "https://jsonplaceholder.typicode.com/users/";
  
 
   constructor(private httpClient: HttpClient) { }
   getReview():Observable<IReview[]>{
   return this.httpClient.get<IReview[]>(this.url) 
   }
  }
