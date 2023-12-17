import { Component, inject } from '@angular/core';
import {Product} from "../product";
import {ProductService} from "../product.service";
import {CommonModule} from "@angular/common";
import {ProductsComponent} from "../products/products.component";



@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, ProductsComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  followings: Product[] = [];
  explore: Product[] = [];
  productService: ProductService = inject(ProductService);





constructor() {
    this.productService.getProducts().then((products: Product[]) => {
      this.explore = products;
      for (let product of products) {
        console.log(product.image);
      }
    });

    this.productService.getFollowedProducts().then((products: Product[]) => {
     this.followings = products;
    });




  }

}
