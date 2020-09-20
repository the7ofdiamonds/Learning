import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LearnComponent } from '../learn/learn.component';
import { ManageComponent } from '../manage/manage.component';
import { InvestComponent } from '../invest/invest.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';

@Component({
  selector: 'app-aboutorb',
  templateUrl: './aboutorb.component.html',
  styleUrls: ['./aboutorb.component.css']
})
export class AboutorbComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openLearn() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.hasBackdrop = true;
    dialogConfig.backdropClass
    dialogConfig.panelClass

    const dialogRef = this.dialog.open(LearnComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openManage() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.hasBackdrop = true;
    dialogConfig.backdropClass
    dialogConfig.panelClass

    const dialogRef = this.dialog.open(ManageComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openInvest() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.hasBackdrop = true;
    dialogConfig.backdropClass
    dialogConfig.panelClass

    const dialogRef = this.dialog.open(InvestComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openPrivacy() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.hasBackdrop = true;
    dialogConfig.backdropClass
    dialogConfig.panelClass

    const dialogRef = this.dialog.open(PrivacyComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openTerms() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.hasBackdrop = true;
    dialogConfig.backdropClass
    dialogConfig.panelClass

    const dialogRef = this.dialog.open(TermsAndConditionsComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
