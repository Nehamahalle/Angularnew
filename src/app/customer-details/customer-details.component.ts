import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../cust-service.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  customer = [];
  custErrorMsg:any='';
  
  constructor(private customerService:CustomerService) { }
  
  ngOnInit(): void {
  this.customerService.getCustomer().subscribe(
  success => this.customer = success,
  error => this.custErrorMsg = error
  )
  } 

}

