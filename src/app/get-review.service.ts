import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetReviewService {

  review=[
    {id:101, name:"Dipali",description:"This book is good",reviewDate:"10/04/2021",Image: "../assets/dipali.jpg"},
    {id:102, name:"Preeti",description:"This book is good",reviewDate:"10/04/2021",Image: "../assets/preeti.jpg" },
    {id:103, name:"Neha", description:"This book is good",reviewDate:"10/04/2021",Image: "../assets/neha.jpg"} 
   ]
 private behavSubj = new BehaviorSubject(this.review);
 currentData = this.behavSubj.asObservable()
 changeData(data:any[]){
   this.behavSubj.next(data)
}
}
