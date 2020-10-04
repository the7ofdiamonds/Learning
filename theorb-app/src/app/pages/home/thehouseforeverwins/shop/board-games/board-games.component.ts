import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/thehouseforeverwins/products.service';
import { Product } from 'src/app/models/thehouseforeverwins/product';

@Component({
  selector: 'app-board-games',
  templateUrl: './board-games.component.html',
  styleUrls: ['./board-games.component.css']
})
export class BoardGamesComponent implements OnInit {

  products: Product[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getBoardGames().subscribe((products) => {
      this.products = products.result.sync_product;
    });
  }

}
