import { Component, OnInit, Inject } from '@angular/core';
import { ListingService } from '../../../../../../services/orb/real-estate/listing.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../../../../../../app.component'


@Component({
  selector: 'app-residential-property',
  templateUrl: './residential-property.component.html',
  styleUrls: ['./residential-property.component.css']
})
export class ResidentialPropertyComponent implements OnInit {

  id: any;
  property: any;
  gallery: any[];

  constructor(private listingService: ListingService, @Inject(MAT_DIALOG_DATA) public data: any, private router: ActivatedRoute, public appComponent: AppComponent) { }

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
  }
}
