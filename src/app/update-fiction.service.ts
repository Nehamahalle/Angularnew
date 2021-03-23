import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateFictionService {

  pProductList:any[]=[
    {"bookID":101,"bookName":"The Alchemist","bookPrice":600,"Description":"Magic, mysticism, wisdom tale.","publishedDate":"10/04/2021","Image": "../assets/alchemist.png"},
     {"bookID":102,"bookName":"The Graveyard Book","bookPrice":600,"Description":"Discover the bewitching, classic children's novel ","publishedDate":"12/25/2020","Image":"../assets/graveyard.png"},
     {"bookID":103,"bookName":"Daughter of Fortune: A Novel","bookPrice":800.235,"Description":" A passionate tale of one young woman.","publishedDate":"10/15/2019","Image":"../assets/TheDaughter.png"}
   
 ]
  private behavSubj = new BehaviorSubject(this.pProductList);
 currentData = this.behavSubj.asObservable()
 changeData(data:any[]){
   this.behavSubj.next(data)
}
}
