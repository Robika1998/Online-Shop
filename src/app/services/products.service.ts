import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IProducts } from "../models/products";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    [x: string]: any;

    url: string = 'http://localhost:3000/products';
    urlBasket: string = 'http://localhost:3000/basket';

    constructor(private http:HttpClient) { }

    getProducts(): Observable<IProducts[]> {
        return this.http.get<IProducts[]>(this.url);
    }

    getProduct(id: number): Observable<IProducts> {
        return this.http.get<IProducts>(`${this.url}/${id}`);
    }

 
    postProduct(product: IProducts) {
        return this.http.post<IProducts>(this.url, product);
    }

    deleteProduct(id:number) {
        return this.http.delete<any>(`${this.url}/${id}`);
    }

    updateProduct(product: IProducts) {
        return this.http.put<IProducts>(`${this.url}/${product.id}`, product);
    }

    postProductToBasket(product: IProducts) {
        return this.http.post<IProducts>(this.urlBasket, product);
    }

    // getProductFromBasket(): Observable<IProducts> {
    //    return  this.http.get<IProducts[]>(this.url);
    // }

}