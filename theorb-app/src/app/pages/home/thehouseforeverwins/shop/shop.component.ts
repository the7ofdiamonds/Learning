import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProductsService } from 'src/app/services/thehouseforeverwins/products.service';
import { BackpackComponent } from './backpack/backpack.component';
import { BoardGamesComponent } from './board-games/board-games.component';
import { BooksComponent } from './books/books.component';
import { HatsComponent } from './hats/hats.component';
import { LongSleevesComponent } from './long-sleeves/long-sleeves.component';
import { TShirtsComponent } from './t-shirts/t-shirts.component';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit{

  products: any[] = [];

  constructor(public dialog: MatDialog, private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getProducts().subscribe((product) => console.log(product));
  }

  isShown: boolean = false;
  isVisible: boolean = false;

  openBoardGames() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.hasBackdrop = true;
    dialogConfig.panelClass = 'custom-modalbox';

    this.dialog.open(BoardGamesComponent, dialogConfig);
  }

  openBooks() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.hasBackdrop = true;
    dialogConfig.panelClass = 'custom-modalbox';

    this.dialog.open(BooksComponent, dialogConfig);
  }

  openBackpack() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.hasBackdrop = true;
    dialogConfig.panelClass = 'custom-modalbox';

    this.dialog.open(BackpackComponent, dialogConfig);
  }

  openHats() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.hasBackdrop = true;
    dialogConfig.panelClass = 'custom-modalbox';

    this.dialog.open(HatsComponent, dialogConfig);
  }

  openLongSleeves() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.hasBackdrop = true;
    dialogConfig.panelClass = 'custom-modalbox';

    this.dialog.open(LongSleevesComponent, dialogConfig);
  }

  openTShirts() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.hasBackdrop = true;
    dialogConfig.panelClass = 'custom-modalbox';

    this.dialog.open(TShirtsComponent, dialogConfig);
  }

}
