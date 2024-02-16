import { Component, OnInit, OnDestroy } from '@angular/core';
import { IProducts } from '../../models/products';
import { Subscription } from 'rxjs';
import { ProductService } from '../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  [x: string]: any;
  products: IProducts[] = []; // Initialize as empty array
  productsSubscription: Subscription;

  constructor(private productsService: ProductService, private router:Router) {}

  ngOnInit(): void {
    this.productsSubscription = this.productsService.getProducts().subscribe((data) =>{
      this.products = data;
    });
  }

  ngOnDestroy(): void {
    if (this.productsSubscription) {
      this.productsSubscription.unsubscribe();
    }
  }

 goToSingle(id:any){
 
  this.router.navigate(['/product', id ])
 }

}








// import { Component, OnInit } from '@angular/core';
// import { IProducts } from '../../models/products';
// import { Subscription } from 'rxjs';
// import { ProductService } from '../../services/products.service';


// @Component({
//   selector: 'app-products',
//   templateUrl: './products.component.html',
//   styleUrl: './products.component.scss'
// })
// export class ProductsComponent implements OnInit {
//   products: IProducts[];
//   productsSubscription: Subscription;


//    constructor(private ProductsService: ProductService) {}

//   ngOnInit(): void {
//     this.productsSubscription = this.ProductsService.getProducts().subscribe((data) =>{
//       this.products = data;
//     });
//   }

//   ngOnDestroy() {
//   if (this.productsSubscription) this.productsSubscription.unsubscribe();

//   }
// }
