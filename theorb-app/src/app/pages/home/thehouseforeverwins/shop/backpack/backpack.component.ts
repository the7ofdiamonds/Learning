import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/thehouseforeverwins/products.service';
import { Product } from 'src/app/models/thehouseforeverwins/product';

@Component({
  selector: 'app-backpack',
  templateUrl: './backpack.component.html',
  styleUrls: ['./backpack.component.css']
})
export class BackpackComponent implements OnInit {

  products: Product[] = [];
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getBackpack().subscribe((products) => {
      this.products = products.result.sync_product;
    });
  }
}
