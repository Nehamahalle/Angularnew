import { Component } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  product = [];
  constructor(private employeeService: ProductsService) {
    this.product = employeeService.getProductList()

}
}
