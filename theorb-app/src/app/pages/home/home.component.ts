import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { HeaderComponent } from '../home/the7ofdiamonds/header/header.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar, private _bottomDialog: MatBottomSheet) { }
  ngOnInit(): void {
  }

  isShown: boolean = false;
  isVisible: boolean = false;

  openHeader() {
    if (this.isShown === false ) {
      this.isShown = true;
    } else {
      this.isShown = false;
    }
  }

  openORBHeader() {
    if (this.isVisible === false) {
      this.isVisible = true;
    } else {
      this.isVisible = false;
    }
  }
}
