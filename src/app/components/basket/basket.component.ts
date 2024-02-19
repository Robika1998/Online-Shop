import { Component, OnInit } from '@angular/core';
import { IProducts } from '../../models/products';
import { Subscription } from 'rxjs';
import { ProductService } from '../../services/products.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.scss'
})
export class BasketComponent implements OnInit {

  constructor(private ProductsService: ProductService) {}
  basket: IProducts;
  basketSubscription: Subscription;


  ngOnInit(): void {
    this.basketSubscription = this.ProductsService.getProductFromBasket().subscribe((data) => {
      this.basket = data;
    })
  }

  ngOnDestroy() {
    if (this.basketSubscription) this.basketSubscription.unsubscribe();
  }
}
