import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../../../../app.component'

@Component({
  selector: 'app-business-insurance',
  templateUrl: './business-insurance.component.html',
  styleUrls: ['./business-insurance.component.css']
})
export class BusinessInsuranceComponent implements OnInit {

  constructor(public appComponent: AppComponent) { }

  ngOnInit(): void {
    this.appComponent.header = "businessinsurance";
    this.appComponent.page = "insurance";
    this.appComponent.section = "manage";
    this.appComponent.isVisible = true;
  }

}
