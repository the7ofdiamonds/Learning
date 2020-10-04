import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/thehouseforeverwins/products.service';
import { Product } from 'src/app/models/thehouseforeverwins/product';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  products: Product[] = [];
  
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getBooks().subscribe((products) => {
      this.products = products.result.sync_product;
    });
  }
}
