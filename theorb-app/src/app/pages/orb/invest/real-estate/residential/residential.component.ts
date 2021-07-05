import { Component, OnInit } from '@angular/core';
import { ListingService } from 'src/app/services/orb/real-estate/listing.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ResidentialPropertyComponent } from './residential-property/residential-property.component';

@Component({
  selector: 'app-residential',
  templateUrl: './residential.component.html',
  styleUrls: ['./residential.component.css']
})
export class ResidentialComponent implements OnInit {
  isVisible: boolean = true;
  properties: any[];
  gallery: any[];
  id: number;


  constructor(private listingService: ListingService, public dialog: MatDialog) { }
  i: number = 0;
  Media: any[];

  ngOnInit() {
    this.listingService.getListings().subscribe((props) => {
      this.properties = props.bundle;
      
      console.log(this.properties)
    })

  }

  openProperty(id: number) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.hasBackdrop = true;
    dialogConfig.panelClass = 'custom-modalbox';
    dialogConfig.data = id;

    const dialogRef = this.dialog.open(ResidentialPropertyComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}