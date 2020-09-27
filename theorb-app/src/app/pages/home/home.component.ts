import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { HeaderComponent } from '../home/the7ofdiamonds/header/header.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar, private _bottomDialog: MatBottomSheet) { }
  ngOnInit(): void {
  }

  isShown: boolean;
  isHidden: boolean;

  openHeader() {
    if (this.isShown === false && this.isHidden === false) {
      this.isShown = true;
    }

    if (this.isShown === false) {
      this.isShown = true;
    } else {
      this.isShown = false;
    }
  }

  openAbout() {
    this.dialog.open(AboutComponent);
  }

  openServices() {
    this.dialog.open(ServicesComponent);
  }

  openDesign() {
    this.dialog.open(DesignComponent);
  }

  openDevelopment() {
    this.dialog.open(DevelopmentComponent);
  }

  openShop() {
   this.dialog.open(ShopComponent);
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
