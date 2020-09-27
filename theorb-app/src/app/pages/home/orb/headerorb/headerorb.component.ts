import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ShopComponent } from '../../../shop/shop.component';
import { AboutorbComponent } from '../../../home/orb/aboutorb/aboutorb.component';
import { LoginComponent } from '../../../login/login.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatBottomSheet } from '@angular/material/bottom-sheet';


@Component({
  selector: 'app-headerorb',
  templateUrl: './headerorb.component.html',
  styleUrls: ['./headerorb.component.css']
})
export class HeaderorbComponent {

  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar, private _bottomDialog: MatBottomSheet) { }

  isShown: boolean = false;
  isHidden: boolean = false;

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

  openORBShop() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.hasBackdrop = true;
    dialogConfig.panelClass = 'custom-modalbox';

    this.dialog.open(ShopComponent, dialogConfig);
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

  openAboutORB() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.hasBackdrop = true;
    dialogConfig.panelClass = 'custom-modalbox';

    this.dialog.open(AboutorbComponent, dialogConfig);
  }

  openLogin() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.hasBackdrop = true;
    dialogConfig.panelClass = 'custom-modalbox';

    this.dialog.open(LoginComponent, dialogConfig);
  }


}
