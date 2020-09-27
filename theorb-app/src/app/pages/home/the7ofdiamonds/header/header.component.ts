import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AboutComponent } from '../about/about.component';
import { ServicesComponent } from '../services/services.component';
import { DesignComponent } from '../services/design/design.component';
import { DevelopmentComponent } from '../services/development/development.component';
import { ShopComponent } from '../../../shop/shop.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar, private _bottomDialog: MatBottomSheet) { }

  ngOnInit(): void {
  }

  isShown: boolean;
  isHidden: boolean;

  openHeader() {
    if (this.isShown === false && this.isHidden === true) {
      this.isShown = true;
      this.isHidden = false;
    }

    if (this.isShown === false) {
      this.isShown = true;
    } else {
      this.isShown = false;
    }
  }

  openAbout() {
    this.dialog.open(AboutComponent);
    console.log('From header')
  }

  openServices() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.hasBackdrop = true;
    dialogConfig.backdropClass
    dialogConfig.panelClass

    const dialogRef = this.dialog.open(ServicesComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDesign() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.hasBackdrop = true;
    dialogConfig.backdropClass
    dialogConfig.panelClass

    const dialogRef = this.dialog.open(DesignComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDevelopment() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.hasBackdrop = true;
    dialogConfig.backdropClass
    dialogConfig.panelClass

    const dialogRef = this.dialog.open(DevelopmentComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openShop() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.hasBackdrop = true;
    dialogConfig.backdropClass
    dialogConfig.panelClass

    const dialogRef = this.dialog.open(ShopComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openORBHeader() {
    if (this.isShown === true && this.isHidden === false) {
      this.isHidden = true;
      this.isShown = false;
    }

    if (this.isHidden === false) {
      this.isHidden = true;
    } else {
      this.isHidden = false;
    }
  }

}
