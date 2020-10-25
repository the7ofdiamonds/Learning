import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { BusinessesForSaleComponent } from './businesses-for-sale/businesses-for-sale.component';
import { InvestmentPropertiesComponent } from './investment-properties/investment-properties.component';

@Component({
  selector: 'app-tangible-assets',
  templateUrl: './tangible-assets.component.html',
  styleUrls: ['./tangible-assets.component.css']
})
export class TangibleAssetsComponent {

  constructor(public dialog: MatDialog) { }

  openInvestmentProperties() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.hasBackdrop = true;
    dialogConfig.backdropClass
    dialogConfig.panelClass

    const dialogRef = this.dialog.open(InvestmentPropertiesComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openBusinessesForSale() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.hasBackdrop = true;
    dialogConfig.backdropClass
    dialogConfig.panelClass

    const dialogRef = this.dialog.open(BusinessesForSaleComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
