import { Injectable } from '@angular/core';
import { IProducts } from '../models/products';
import {
  Router,Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { EMPTY, Observable, catchError, of } from 'rxjs';
import { ProductService } from './products.service';


@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<IProducts>  {
  constructor(private ProductsService: ProductService, private router: Router) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProducts> {
    return this.ProductsService.getProduct(route.params?.['id']).pipe(
      catchError(() => {
        this.router.navigate(['products']);
        return EMPTY;
      })
      )
  }
  
}
