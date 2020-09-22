import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { QuoteComponent } from '../../../../../../components/forms/quote/quote.component';

@Component({
  selector: 'app-sendmoney',
  templateUrl: './sendmoney.component.html',
  styleUrls: ['./sendmoney.component.css']
})
export class SendmoneyComponent {

  constructor(public dialog: MatDialog) { }

  openQuote() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.hasBackdrop = true;
    dialogConfig.backdropClass
    dialogConfig.panelClass

    const dialogRef = this.dialog.open(QuoteComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}