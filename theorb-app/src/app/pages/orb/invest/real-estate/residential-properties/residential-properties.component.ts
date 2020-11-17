import { Component, OnInit } from '@angular/core';
import { ListingService } from 'src/app/services/orb/real-estate/listing.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AppComponent } from '../../../../../app.component'

@Component({
  selector: 'app-residential-properties',
  templateUrl: './residential-properties.component.html',
  styleUrls: ['./residential-properties.component.css']
})
export class ResidentialPropertiesComponent implements OnInit {
  properties: any[];
  gallery: any[];
  id: number;
  
  constructor(private listingService: ListingService, public dialog: MatDialog, public appComponent: AppComponent) { }
  Media: any[];

  ngOnInit() {
    this.listingService.getListings().subscribe((props) => {
      this.properties = props.bundle;

      console.log(this.properties)
    })
    this.appComponent.header = "residential";
    this.appComponent.page = "realestate";
    this.appComponent.section = "invest";
    this.appComponent.isVisible = true;
  }
}