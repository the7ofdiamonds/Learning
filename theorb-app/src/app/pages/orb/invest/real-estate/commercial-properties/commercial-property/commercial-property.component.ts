import { Component, OnInit, Inject } from '@angular/core';
import { ListingService } from '../../../../../../services/orb/listing.service';
import { ProductDetailService } from 'src/app/services/thehouseforeverwins/product-detail.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-commercial-property',
  templateUrl: './commercial-property.component.html',
  styleUrls: ['./commercial-property.component.css']
})
export class CommercialPropertyComponent implements OnInit {

  id: any;
  property: any;
  gallery: any[];

  constructor(private listingService: ListingService, @Inject(MAT_DIALOG_DATA) public data: any, private router: ActivatedRoute, private details: ProductDetailService) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id') || this.data;
    console.log(this.id)

    this.listingService.getProperty(this.id).subscribe((prop) => {
      this.property = prop;
      this.gallery = prop.Media;

      console.log(this.property)
      console.log(this.gallery)
    })
  }
}
