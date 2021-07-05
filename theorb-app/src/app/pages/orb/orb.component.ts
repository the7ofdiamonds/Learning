import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { AboutOrbComponent } from './about-orb/about-orb.component';
import { LearnComponent } from './learn/learn.component';
import { ManageComponent } from './manage/manage.component';
import { InvestComponent } from './invest/invest.component';

@Component({
  selector: 'app-orb',
  templateUrl: './orb.component.html',
  styleUrls: ['./orb.component.css']
})
export class OrbComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openLogin() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.hasBackdrop = true;
    dialogConfig.panelClass = 'custom-modalbox';

    this.dialog.open(LoginComponent, dialogConfig);
  }

  openAboutOrb() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.hasBackdrop = true;
    dialogConfig.panelClass = 'custom-modalbox';

    this.dialog.open(AboutOrbComponent, dialogConfig);
  }

  openLearn() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.hasBackdrop = true;
    dialogConfig.panelClass = 'custom-modalbox';

    this.dialog.open(LearnComponent, dialogConfig);
  }

  openManage() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.hasBackdrop = true;
    dialogConfig.panelClass = 'custom-modalbox';

    this.dialog.open(ManageComponent, dialogConfig);
  }

  openInvest() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.hasBackdrop = true;
    dialogConfig.panelClass = 'custom-modalbox';

    this.dialog.open(InvestComponent, dialogConfig);
  }
}
