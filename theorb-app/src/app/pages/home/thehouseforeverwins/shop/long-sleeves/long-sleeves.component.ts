import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/thehouseforeverwins/products.service';
import { Product } from 'src/app/models/thehouseforeverwins/product';

@Component({
  selector: 'app-long-sleeves',
  templateUrl: './long-sleeves.component.html',
  styleUrls: ['./long-sleeves.component.css']
})
export class LongSleevesComponent implements OnInit {

  products: Product;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getLongsleeves().subscribe((products) => {
      this.products = products.result.sync_product;
    });
  }

}
