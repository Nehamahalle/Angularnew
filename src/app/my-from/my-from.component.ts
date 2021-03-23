import { Component } from '@angular/core';

@Component({
  selector: 'app-my-from',
  templateUrl: './my-from.component.html',
  styleUrls: ['./my-from.component.css']
})
export class MyFromComponent  {
  myArrayData=[]
  userForm = [];
  submitData(formData:any){
    alert("Submit Information...")
    console.log(formData)
    this.myArrayData.push(formData)
    }
    

}
