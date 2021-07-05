import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { RealEstateComponent } from './real-estate/real-estate.component';
import { PaperAssetsComponent } from './paper-assets/paper-assets.component';
import { TangibleAssetsComponent } from './tangible-assets/tangible-assets.component';

@Component({
  selector: 'app-invest',
  templateUrl: './invest.component.html',
  styleUrls: ['./invest.component.css']
})
export class InvestComponent {

  constructor(public dialog: MatDialog) { }

  openRealEstate() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.hasBackdrop = true;
    dialogConfig.panelClass = 'custom-modalbox';

    this.dialog.open(RealEstateComponent, dialogConfig);
  }

  openPaperAssets() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.hasBackdrop = true;
    dialogConfig.panelClass = 'custom-modalbox';

    this.dialog.open(PaperAssetsComponent, dialogConfig);
  }

  openTangibleAssets() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.hasBackdrop = true;
    dialogConfig.panelClass = 'custom-modalbox';

    this.dialog.open(TangibleAssetsComponent, dialogConfig);
  }
}