import { Component, OnInit } from '@angular/core';
import { ListingService } from 'src/app/services/orb/real-estate/listing.service';
import { AppComponent } from '../../../../../app.component'


@Component({
  selector: 'app-commercial-properties',
  templateUrl: './commercial-properties.component.html',
  styleUrls: ['./commercial-properties.component.css']
})
export class CommercialPropertiesComponent implements OnInit {
  properties: any[];
  gallery: any[];
  id: number;

  constructor(private listingService: ListingService, public appComponent: AppComponent) { }
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
}
