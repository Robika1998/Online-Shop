import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from '../../services/products.service';
import { IProducts } from '../../models/products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {

  product: IProducts;
  productsSubscription: Subscription;

  constructor(private productsService: ProductService,private route: ActivatedRoute) { }
  

 ngOnInit(){
  this.productsSubscription = this.route.data.subscribe((data) => {
    this.product = data['data'];
  })
 
 }
 
  
}








// import { Component } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { Subscription } from 'rxjs';
// import { ProductService } from '../../services/products.service';

// @Component({
//   selector: 'app-product-details',
//   templateUrl: './product-details.component.html',
//   styleUrl: './product-details.component.scss'
// })
// export class ProductDetailsComponent {
// [x: string]: any;
//   constructor(private productsService: ProductService,private route: ActivatedRoute) { }
//   productsSubscription: Subscription;

//   productId: string;
//   data:any  = {}
//  ngOnInit(){
//   this.productId = this.route.snapshot.paramMap.get('id');  // ამ ფუნქცით ვიღებთ პროდუქტის ID-ის 
//   this.productsSubscription = this.productsService.getProducts().subscribe((data) =>  
//   this.data = data.find((val:any) => this.productId  == val.id));
 

//  }
//  onClick(){
//   console.log(this.data)
//  }
  
// }
