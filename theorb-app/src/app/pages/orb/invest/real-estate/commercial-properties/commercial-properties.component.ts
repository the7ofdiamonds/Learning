import { Component, OnInit } from '@angular/core';
import { ListingService } from 'src/app/services/orb/real-estate/listing.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CommercialPropertyComponent } from './commercial-property/commercial-property.component';
import { AppComponent } from '../../../../../app.component'


@Component({
  selector: 'app-commercial-properties',
  templateUrl: './commercial-properties.component.html',
  styleUrls: ['./commercial-properties.component.css']
})
export class CommercialPropertiesComponent implements OnInit {
  isVisible: boolean = true;
  properties: any[];
  gallery: any[];
  id: number;


  constructor(private listingService: ListingService, public dialog: MatDialog, public appComponent: AppComponent) { }
  i: number = 0;
  Media: any[];

  ngOnInit() {
    this.listingService.getListings().subscribe((props) => {
      this.properties = props.bundle;
      
      console.log(this.properties)
    })
    this.appComponent.header = "commercial";
    this.appComponent.page = "realestate";
    this.appComponent.section = "invest";
    this.appComponent.isVisible = true;
  }

  openProperty(id: number) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.hasBackdrop = true;
    dialogConfig.panelClass = 'custom-modalbox';
    dialogConfig.data = id;

    const dialogRef = this.dialog.open(CommercialPropertyComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
