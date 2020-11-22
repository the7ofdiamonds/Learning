import { Component, OnInit, Inject } from '@angular/core';
import { ListingService } from '../../../../../../services/orb/real-estate/listing.service';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../../../../../../app.component';
import { MortgageComponent } from 'src/app/pages/orb/manage/debt/mortgage/mortgage.component';
import { AccountsComponent } from '../../../../manage/accounts/accounts.component';

@Component({
  selector: 'app-commercial-property',
  templateUrl: './commercial-property.component.html',
  styleUrls: ['./commercial-property.component.css']
})
export class CommercialPropertyComponent implements OnInit {

  id: any;
  property: any;
  gallery: any[];
  ready: boolean;

  constructor(public dialog: MatDialog, private listingService: ListingService, @Inject(MAT_DIALOG_DATA) public data: any, private router: ActivatedRoute, public appComponent: AppComponent) { }

  ngOnInit(): void {
    this.appComponent.header = "property";
    this.appComponent.page = "realestate";
    this.appComponent.section = "invest";
    this.appComponent.isVisible = true;

    this.id = this.router.snapshot.paramMap.get('id') || this.data;
    console.log(this.id)
    console.log(this.data)

    this.listingService.getProperty(this.id).subscribe((prop) => {
      this.property = prop;
      this.gallery = prop.Media;

      console.log(this.property)
      console.log(this.gallery)
    })

    this.ready = true;
  }

  openMortgage() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.hasBackdrop = true;
    dialogConfig.panelClass = 'custom-modalbox';

    this.dialog.open(MortgageComponent, dialogConfig);
  }

  openAccounts() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.hasBackdrop = true;
    dialogConfig.panelClass = 'custom-modalbox';

    this.dialog.open(AccountsComponent, dialogConfig);
  }

}
