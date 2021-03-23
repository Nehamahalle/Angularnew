import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UpdateFictionService } from '../update-fiction.service';

@Component({
  selector: 'app-update-fiction',
  templateUrl: './update-fiction.component.html',
  styleUrls: ['./update-fiction.component.css']
})
export class UpdateFictionComponent  {
  myData:any=[]
  myData1:any[]= [
    {bookID:111,bookName:"The Alchemist",bookPrice:600,Description:"Combining magic, mysticism, wisdom and wonder into an inspiring tale of self-discovery.",publishedDate:"10/04/2021",Image: "../assets/alchemist.png"},
     {bookID:112,bookName:"The Graveyard Book",bookPrice:600,Description:"Discover the bewitching, classic children's novel ",publishedDate:"12/25/2020",Image:"../assets/graveyard.png"},
     {bookID:113,bookName:"Daughter of Fortune: A Novel",bookPrice:800.235,Description:" A passionate tale of one young woman's quest to save her lover set against the chaos of the 1849 California Gold Rush.",publishedDate:"10/15/2019",Image:"../assets/TheDaughter.png"}
   
 ]
 constructor(private dataService: UpdateFictionService) { }
  
 ngOnInit(): void {
 this.dataService.currentData.subscribe(data =>this.myData = data )
 }
 
 updatedData(){
   alert("Do you want to update the list?")
   this.myData = this.myData.concat(this.myData1)
 this.dataService.changeData(this.myData)
 }
}


