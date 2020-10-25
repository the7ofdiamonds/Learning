import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ShopComponent } from '../../../home/thehouseforeverwins/shop/shop.component';
import { AboutorbComponent } from '../../../home/orb/aboutorb/aboutorb.component';
import { LoginComponent } from '../../../login/login.component';

@Component({
  selector: 'app-headerorb',
  templateUrl: './headerorb.component.html',
  styleUrls: ['./headerorb.component.css']
})
export class HeaderorbComponent {

  constructor(public dialog: MatDialog) { }

  isShown: boolean = false;
  isVisible: boolean = false;

  openORBShop() {
    this.dialog.open(ShopComponent);
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

