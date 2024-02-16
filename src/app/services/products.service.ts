import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IProducts } from "../models/products";

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    url: string = 'http://localhost:3000/products';

    constructor(private http:HttpClient) { }

    getProducts(): Observable<IProducts[]> {
        return this.http.get<IProducts[]>(this.url);
    }

    getProduct(id: number): Observable<IProducts> {
        return this.http.get<IProducts>(`${this.url}/${id}`);
    }
}





// import { HttpClient } from "@angular/common/http";
// import { Injectable } from "@angular/core";
// import { IProducts } from "../models/products";

// @Injectable({
//     providedIn: 'root'
// })
// export class ProductService {

//     url: string = 'http://localhost:3000/products';

//     constructor(private http:HttpClient) { }

//     getProducts() {
//      this.http.get<IProducts>(this.url);
//     }

//     getProduct(id: number) {
//      this.http.get<IProducts>(`${this.url}/${id}`);
//     }
// }