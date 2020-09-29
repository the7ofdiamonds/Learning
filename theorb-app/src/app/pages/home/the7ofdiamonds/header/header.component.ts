import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AboutComponent } from '../about/about.component';
import { ServicesComponent } from '../services/services.component';
import { DesignComponent } from '../services/design/design.component';
import { DevelopmentComponent } from '../services/development/development.component';
import { ShopComponent } from '../../../shop/shop.component';
import { Overlay, ScrollStrategy } from '@angular/cdk/overlay';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  isShown: boolean = false;
  isVisible: boolean = false;

  openHeader() {
    if (this.isShown === false) {
      this.isShown = true;
      this.isVisible = false;
    } else {
      this.isShown = false;
    }
  }

  openAbout() {
    this.dialog.open(AboutComponent);
    console.log('From header')
  }

  openServices() {
    this.dialog.open(ServicesComponent);
    console.log('From header')
  }

  openShop() {
    this.dialog.open(ShopComponent);
  }

  openORBHeader() {
    if (this.isVisible === false) {
      this.isVisible = true;
      this.isShown = false;
    } else {
      this.isVisible = false;
    }
  }

}
