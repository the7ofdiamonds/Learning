import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AboutTHFWComponent } from './about-thfw/about-thfw.component';
import { ThemeComponent } from './shop/theme/theme.component';
import { MerchandiseComponent } from './shop/product/merchandise/merchandise.component';
import { BookComponent } from './shop/product/book/book.component';

@Component({
  selector: 'app-thehouseforeverwins',
  templateUrl: './thehouseforeverwins.component.html',
  styleUrls: ['./thehouseforeverwins.component.css']
})
export class ThehouseforeverwinsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openAboutTHFW() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.hasBackdrop = true;
    dialogConfig.panelClass = 'custom-modalbox';

    this.dialog.open(AboutTHFWComponent, dialogConfig);
  }

  openTheme() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.hasBackdrop = true;
    dialogConfig.panelClass = 'custom-modalbox';

    this.dialog.open(ThemeComponent, dialogConfig);
  }

  openMerch() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.hasBackdrop = true;
    dialogConfig.panelClass = 'custom-modalbox';

    this.dialog.open(MerchandiseComponent, dialogConfig);
  }

  openBook() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.hasBackdrop = true;
    dialogConfig.panelClass = 'custom-modalbox';

    this.dialog.open(BookComponent, dialogConfig);
  }
}
