import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fiction } from './module/fiction';

@Injectable({
  providedIn: 'root'
})
export class FictionService {

  private url:string = "../assets/Fiction.json"; 
  //private url:string = "https://jsonplaceholder.typicode.com/users/";
  
 
   constructor(private httpClient: HttpClient) { }
   getFiction():Observable<Fiction[]>{
   return this.httpClient.get<Fiction[]>(this.url) 
   }
}
