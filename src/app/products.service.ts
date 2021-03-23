import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  getProductList(){
    return[
      {productID:101,productName:'laptop',productPrice:60000.12,productDescription:'Dell',manufDate:'10/04/2021',productImage: '../assets/laptop.jpg'},
       {productID:102,productName:'mouse',productPrice:600.457,productDescription:'iball',manufDate:'12/25/2020',productImage:'../assets/mouse.jpg'},
       {productID:103,productName:'Keyboard',productPrice:800.235,productDescription:'Logitech Wired Keyboard',manufDate:'10/15/2019',productImage:'../assets/keyboard.jpg'},
     {productID:104,productName:'printer',productPrice:5000,productDescription:'Canon',manufDate:'11/03/2021',productImage:'../assets/printer.jpg'},
     {productID:105,productName:'Scanner',productPrice:7000.5432,productDescription:'Epson',manufDate:'02/20/2021',productImage:'../assets/scanner.jpg'}
   
   ]
  }
 }

