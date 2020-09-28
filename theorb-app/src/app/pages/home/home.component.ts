import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { HeaderorbComponent } from './orb/headerorb/headerorb.component';
import { HeaderComponent } from './the7ofdiamonds/header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  ngOnInit(): void {
  }

  isShown: boolean = false;
  isVisible: boolean = false;

  openHeader() {
    if (this.isShown === false ) {
      this.isShown = true;
      this.isVisible = false;
    } else {
      this.isShown = false;
    }
  }

  openORBHeader() {
    if (this.isVisible === false) {
      this.isVisible = true;
      this.isShown = false;
    } else {
      this.isVisible = false;
    }
  }
}
