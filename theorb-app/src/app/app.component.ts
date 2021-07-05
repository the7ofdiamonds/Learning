import { Component, Inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginComponent } from './pages/login/login.component';

import { ListingService } from './services/orb/real-estate/listing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public dialog: MatDialog, private listingService: ListingService, @Inject(MAT_DIALOG_DATA) public data: any, public router: Router) { }
  ngOnInit(): void {
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }

  /* Login */
  openLogin() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.hasBackdrop = true;
    dialogConfig.panelClass = 'custom-modalbox';

    this.dialog.open(LoginComponent, dialogConfig);
  }

}
