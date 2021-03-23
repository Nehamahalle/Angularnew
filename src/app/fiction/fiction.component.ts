import { Component, OnInit } from '@angular/core';
import { FictionService } from '../fiction.service';
import { UpdateFictionService } from '../update-fiction.service';


@Component({
  selector: 'app-fiction',
  templateUrl: './fiction.component.html',
  styleUrls: ['./fiction.component.css']
})
export class FictionComponent implements OnInit {

  searchText: string;
  order: string;
  fiction = [];
  ErrorMsg:any='';
  new:number;
  price:number;
  
  constructor(private dataService: UpdateFictionService) { }
  
  ngOnInit(): void {
  this.dataService.currentData.subscribe(data =>this.fiction = data )
  }
  

removeItem(id){
  alert("Do you want to delete the book?")
  this.fiction = this.fiction.filter(myData => myData.bookID !== id);
}
 


}