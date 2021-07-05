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
    dialogConfig.panelClass = 'custom-modalbox';

    this.dialog.open(InvestmentPropertiesComponent, dialogConfig);
  }

  openBusinessesForSale() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.hasBackdrop = true;
    dialogConfig.panelClass = 'custom-modalbox';

    this.dialog.open(BusinessesForSaleComponent, dialogConfig);
  }
}