import { Component, Inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AboutComponent } from './pages/the7ofdiamonds/about/about.component';
import { ServicesComponent } from './pages/the7ofdiamonds/services/services.component';
import { AboutorbComponent } from './pages/orb/aboutorb/aboutorb.component';
import { LoginComponent } from './pages/login/login.component';
import { ListingService } from './services/orb/real-estate/listing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public header: string = "";
  public page: string = "";
  public section: string = "";
  notSelected = true;
  loggedIn = true;
  public isShown: boolean;
  public isVisible: boolean;
  panelOpenState = false;
  id: any;
  property: any;

  constructor(public dialog: MatDialog, private listingService: ListingService, @Inject(MAT_DIALOG_DATA) public data: any, private router: ActivatedRoute) { }
  ngOnInit(): void {
    this.isShown = false;
    this.isVisible = false;

    // this.id = this.resprop.id || this.data;
    // console.log(this.id)
    // console.log(this.data)

    // this.listingService.getProperty(this.id).subscribe((prop) => {
    //   this.property = prop;

    //   console.log(this.property)
    // })
  }

  openHeader() {
    if (this.isShown === false) {
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

  openAboutORB() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.hasBackdrop = true;
    dialogConfig.panelClass = 'custom-modalbox';

    this.dialog.open(AboutorbComponent, dialogConfig);
  }

  openLogin() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.hasBackdrop = true;
    dialogConfig.panelClass = 'custom-modalbox';

    this.dialog.open(LoginComponent, dialogConfig);
  }

  openLearn() {
    this.section = "learn";
  }

  openManage() {
    this.section = "manage";
  }

  openInvest() {
    this.section = "invest";
  }

  openRead() {
    this.page = "read";
  }

  openSimulation() {
    this.page = "simulation";
  }

  openAccounts() {
    this.page = "accounts";
  }

  openCurrency() {
    this.page = "currency";
  }

  openDebt() {
    this.page = "debt";
  }

  openInsurance() {
    this.page = "insurance";
  }

  openRealEstate() {
    this.page = "realestate";
  }

  openPaperAssets() {
    this.page = "paperassets";
  }

  openTangibleAssets() {
    this.page = "tangibleassets";
  }
}
