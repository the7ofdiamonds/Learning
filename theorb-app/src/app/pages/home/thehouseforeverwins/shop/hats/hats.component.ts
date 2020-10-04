import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/thehouseforeverwins/products.service';
import { Product } from 'src/app/models/thehouseforeverwins/product';

@Component({
  selector: 'app-hats',
  templateUrl: './hats.component.html',
  styleUrls: ['./hats.component.css']
})
export class HatsComponent implements OnInit {

  products: Product[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getHats().subscribe((products) => {
      this.products = products.result.sync_product;
    });
  }

}
