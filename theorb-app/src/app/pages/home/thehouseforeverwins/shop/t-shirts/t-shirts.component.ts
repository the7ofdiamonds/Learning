import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/thehouseforeverwins/products.service';
import { Product } from 'src/app/models/thehouseforeverwins/product';

@Component({
  selector: 'app-t-shirts',
  templateUrl: './t-shirts.component.html',
  styleUrls: ['./t-shirts.component.css']
})
export class TShirtsComponent implements OnInit {
  products: Product;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getTshirt().subscribe((products) => {
      this.products = products.result.sync_product;
      console.log(this.products)
    })
  }
}
