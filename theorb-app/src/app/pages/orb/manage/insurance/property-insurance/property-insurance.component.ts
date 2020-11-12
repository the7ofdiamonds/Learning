import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../../../../app.component'

@Component({
  selector: 'app-property-insurance',
  templateUrl: './property-insurance.component.html',
  styleUrls: ['./property-insurance.component.css']
})
export class PropertyInsuranceComponent implements OnInit {

  constructor(public appComponent: AppComponent) { }

  ngOnInit(): void {
    this.appComponent.header = "propertyinsurance";
    this.appComponent.page = "insurance";
    this.appComponent.section = "manage";
    this.appComponent.isVisible = true;
  }

}
