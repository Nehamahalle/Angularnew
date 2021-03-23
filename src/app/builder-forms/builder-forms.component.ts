import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-builder-forms',
  templateUrl: './builder-forms.component.html',
  styleUrls: ['./builder-forms.component.css']
})
export class BuilderFormsComponent {
info=[]
  constructor(private formBuilder:FormBuilder){
 
  }
  userForm = this.formBuilder.group({
  name:['',[Validators.required, Validators.pattern('^[a-z\\s]{5,15}$')]],
  email:new FormControl('',[ Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]),
  address:new FormGroup({
    city:new FormControl('',[ Validators.required, Validators.pattern('[A-Z]*[a-z]+')]),
    state:new FormControl('',[ Validators.required, Validators.pattern('[A-Z]*[a-z]+')]),
    postalCode:new FormControl('',[ Validators.required,Validators.pattern('^[0-9]{6,6}$')])
  }),
  terms:new FormControl('Accepted',[ Validators.required])
  })
  
 
  
  submitData(){
    alert("Submit Information...")
  console.log(this.userForm.value)
  this.info.push(this.userForm.value)
  }

}
