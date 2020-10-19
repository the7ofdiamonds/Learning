import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { StocksComponent } from './stocks/stocks.component';
import { BondsComponent } from './bonds/bonds.component';
import { LiensComponent } from './liens/liens.component';
import { NotesComponent } from './notes/notes.component';

@Component({
  selector: 'app-paper-assets',
  templateUrl: './paper-assets.component.html',
  styleUrls: ['./paper-assets.component.css']
})
export class PaperAssetsComponent {

  constructor(public dialog: MatDialog) { }

  openLiens() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.hasBackdrop = true;
    dialogConfig.backdropClass
    dialogConfig.panelClass

    const dialogRef = this.dialog.open(LiensComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openNotes() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.hasBackdrop = true;
    dialogConfig.backdropClass
    dialogConfig.panelClass

    const dialogRef = this.dialog.open(NotesComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openStocks() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.hasBackdrop = true;
    dialogConfig.backdropClass
    dialogConfig.panelClass

    const dialogRef = this.dialog.open(StocksComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openBonds() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.hasBackdrop = true;
    dialogConfig.backdropClass
    dialogConfig.panelClass

    const dialogRef = this.dialog.open(BondsComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
