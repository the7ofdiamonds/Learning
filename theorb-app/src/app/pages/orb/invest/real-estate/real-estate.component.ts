import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CommercialPropertiesComponent } from './commercial-properties/commercial-properties.component';
import { ResidentialPropertiesComponent } from './residential-properties/residential-properties.component';

@Component({
  selector: 'app-real-estate',
  templateUrl: './real-estate.component.html',
  styleUrls: ['./real-estate.component.css']
})
export class RealEstateComponent {

  constructor(public dialog: MatDialog) { }

  openCommercial() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.hasBackdrop = true;
    dialogConfig.backdropClass
    dialogConfig.panelClass

    // const dialogRef = this.dialog.open(CommercialPropertiesComponent, dialogConfig);

    // dialogRef.afterClosed().subscribe(result => {
      console.log('Commercial');
    // });
  }

  openResidential() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.hasBackdrop = true;
    dialogConfig.backdropClass
    dialogConfig.panelClass

    // const dialogRef = this.dialog.open(ResidentialPropertiesComponent, dialogConfig);

    // dialogRef.afterClosed().subscribe(result => {
      console.log('Residential');
    // });
  }

}