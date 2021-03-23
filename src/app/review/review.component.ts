import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent  {

  searchText: string;
  order: string;
  review=[
    {id:101, name:"Dipali",description:"This book is good",reviewDate:"10/04/2021",Image: "../assets/dipali.jpg"},
    {id:102, name:"Preeti",description:"This book is good",reviewDate:"10/04/2021",Image: "../assets/preeti.jpg" },
    {id:103, name:"Neha", description:"This book is good",reviewDate:"10/04/2021",Image: "../assets/neha.jpg"} 
   ]
  reviewErrorMsg:any='';
  id:number
  name:string
  reviews:string
  date:string
  file:string
  info=[
    {id:101, name:"Dipali",review:"This book is good",date:"10/04/2021",file: "../assets/dipali.jpg"},
    {id:102, name:"Preeti",review:"This book is good",date:"10/04/2021",file: "../assets/preeti.jpg" },
    {id:103, name:"Neha", review:"This book is good",date:"10/04/2021",file: "../assets/neha.jpg"} 
   ]
  constructor(private formBuilder:FormBuilder) { }
  userForm = this.formBuilder.group({
    id:['',[Validators.required, Validators.pattern('^[0-9]*')]],
    name:['',[Validators.required, Validators.pattern('^[a-z]*')]],
    review:['',[Validators.required]],
    date:['',[Validators.required]],
    file:['',[Validators.required]],
    })
    
   
    
    submitData(){
    // console.log(this.userForm.value)
    
    this.info.push(this.userForm.value)
    console.log(this.review)
    }

  
  
  
  // ngOnInit(): void {
  // this.reviewService.getReview().subscribe(
  // success => this.review = success,
  // error => this.reviewErrorMsg = error
  // )
  // }  
  removeItem(id){
    this.review = this.review.filter(myData => myData.id !== id);
 }
 removeItems(id){
  this.info = this.info.filter(myData => myData.id !== id);
}

 
}
