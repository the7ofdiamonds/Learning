import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/thehouseforeverwins/products.service';
import { Product } from 'src/app/models/thehouseforeverwins/product';

@Component({
  selector: 'app-long-sleeves',
  templateUrl: './long-sleeves.component.html',
  styleUrls: ['./long-sleeves.component.css']
})
export class LongSleevesComponent implements OnInit {

  prod: Product;
  products: Product[];
  productDetail: any[];
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getLongsleeves().subscribe((prods) => {
      this.products = prods.result.sync_variants;
      console.log(this.products)
    });
  }

}
