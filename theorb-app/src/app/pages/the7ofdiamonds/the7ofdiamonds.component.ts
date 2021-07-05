import { Component, OnInit } from '@angular/core';
import { AboutComponent } from '../the7ofdiamonds/about/about.component';
import { ServicesComponent } from '../the7ofdiamonds/services/services.component';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-the7ofdiamonds',
  templateUrl: './the7ofdiamonds.component.html',
  styleUrls: ['./the7ofdiamonds.component.css']
})
export class The7ofdiamondsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
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
}
