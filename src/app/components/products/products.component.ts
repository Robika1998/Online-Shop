// import { Component, OnInit, OnDestroy } from '@angular/core';
// import { IProducts } from '../../models/products';
// import { Subscription } from 'rxjs';
// import { ProductService } from '../../services/products.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-products',
//   templateUrl: './products.component.html',
//   styleUrls: ['./products.component.scss']
// })
// export class ProductsComponent implements OnInit, OnDestroy {
//   [x: string]: any;
//   products: IProducts[] = []; // Initialize as empty array
//   productsSubscription: Subscription;

//   constructor(private productsService: ProductService, private router:Router) {}

//   ngOnInit(): void {
//     this.productsSubscription = this.productsService.getProducts().subscribe((data) =>{
//       this.products = data;
//     });
//   }

//   ngOnDestroy(): void {
//     if (this.productsSubscription) {
//       this.productsSubscription.unsubscribe();
//     }
//   }

//  goToSingle(id:any){
 
//   this.router.navigate(['/product', id ])
//  }

// }








import { Component, OnInit } from '@angular/core';
import { IProducts } from '../../models/products';
import { Subscription } from 'rxjs';
import { ProductService } from '../../services/products.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  products: IProducts[];
  productsSubscription: Subscription;

  canEdit: boolean = false;
  canView: boolean = false;

   constructor(private ProductsService: ProductService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.canEdit = true;
    this.productsSubscription = this.ProductsService.getProducts().subscribe((data) =>{
      this.products = data;
    });
  }

  addToBasket(product: IProducts) {
    this.ProductsService.postProductToBasket(product).subscribe((data) => console.log(data));
  }


  deleteItem(id: number) {
    console.log(id);
    this.ProductsService.deleteProduct(id).subscribe(() => this.products.find((item) => {
      if (id === item.id) {
        let idx = this.products.findIndex( (data) => data.id === id)
        this.products.splice(idx, 1);
      }
    }));
  }

  openDialog(product?: IProducts): void {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.width = '500px';
    dialogConfig.disableClose = true;
    dialogConfig.data = product;
    
    const dialogRef = this.dialog.open(DialogBoxComponent, dialogConfig);

    dialogRef.afterClosed().subscribe( (data) => {
      if (data) {
        if (data && data.id)
          this.updateData(data);
        else
          this.postData(data);
      }
    });}

  postData(data: IProducts) {
    this.ProductsService.postProduct(data).subscribe((data) => this.products.push(data));
  }

  updateData(product: IProducts) {
    this.ProductsService.updateData(product).subscribe((data) => {
      this.products = this.products.map((product) => {
        if (product.id === data.id ) return data
        else return product
      })
    });
  }

  ngOnDestroy() {
  if (this.productsSubscription) this.productsSubscription.unsubscribe();

  }
}

