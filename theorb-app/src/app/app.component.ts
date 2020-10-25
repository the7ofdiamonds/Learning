import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AboutComponent } from './pages/the7ofdiamonds/about/about.component';
import { ServicesComponent } from './pages/the7ofdiamonds/services/services.component';
import { ShopComponent } from './pages/thehouseforeverwins/shop/shop.component';
import { AboutorbComponent } from './pages/orb/aboutorb/aboutorb.component';
import { LoginComponent } from './pages/login/login.component';
import { Overlay, ScrollStrategy } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  ngOnInit(): void {
  }

  isShown: boolean = false;
  isVisible: boolean = false;

  openHeader() {
    if (this.isShown === false ) {
      this.isShown = true;
      this.isVisible = false;
    } else {
      this.isShown = false;
    }
  }

  openORBHeader() {
    if (this.isVisible === false) {
      this.isVisible = true;
      this.isShown = false;
    } else {
      this.isVisible = false;
    }
  }

  openAbout() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.hasBackdrop = true;
    dialogConfig.panelClass = 'custom-modalbox';

    this.dialog.open(AboutComponent, dialogConfig);
  }

  openServices() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.hasBackdrop = true;
    dialogConfig.panelClass = 'custom-modalbox';

    this.dialog.open(ServicesComponent, dialogConfig);
  }

  openShop() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.hasBackdrop = true;
    dialogConfig.panelClass = 'custom-modalbox';

    this.dialog.open(ShopComponent, dialogConfig);
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
