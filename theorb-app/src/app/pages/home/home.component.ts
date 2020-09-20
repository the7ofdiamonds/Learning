import { Component, OnInit, ɵɵresolveBody } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AboutComponent } from '../home/the7ofdiamonds/about/about.component';
import { ServicesComponent } from '../home/the7ofdiamonds/services/services.component';
import { DesignComponent } from '../home/the7ofdiamonds/services/design/design.component';
import { DevelopmentComponent } from '../home/the7ofdiamonds/services/development/development.component';
import { ShopComponent } from '../shop/shop.component';
import { AboutorbComponent } from '../home/orb/aboutorb/aboutorb.component';
import { LoginComponent } from '../login/login.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar, private _bottomDialog: MatBottomSheet) { }
  ngOnInit(): void {
  }

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

  openAbout() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.hasBackdrop = true;
    dialogConfig.backdropClass
    dialogConfig.panelClass

    const dialogRef = this.dialog.open(AboutComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
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

  openAboutORB() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.hasBackdrop = true;
    dialogConfig.backdropClass
    dialogConfig.panelClass

    const dialogRef = this.dialog.open(AboutorbComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openLogin() {
    const dialogRef = this.dialog.open(LoginComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }
}
