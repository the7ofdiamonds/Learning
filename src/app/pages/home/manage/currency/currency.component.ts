import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SendmoneyComponent } from './sendmoney/sendmoney.component';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent {

  // animal: string;
  // name: string;

  // constructor(public dialog: MatDialog) { }

  openDialog(): void {
    // const dialogRef = this.dialog.open(SendmoneyComponent, {
    //   width: '250px',
    //   data: { name: 'Leo', animal: 'Lion' }
    // });
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.animal = result;
    // });
    console.log('This button works!');
  }

}
