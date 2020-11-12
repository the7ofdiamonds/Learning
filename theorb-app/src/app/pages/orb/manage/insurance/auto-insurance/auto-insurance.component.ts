import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../../../../app.component'

@Component({
  selector: 'app-auto-insurance',
  templateUrl: './auto-insurance.component.html',
  styleUrls: ['./auto-insurance.component.css']
})
export class AutoInsuranceComponent implements OnInit {

  constructor(public appComponent: AppComponent) { }

  ngOnInit(): void {
    this.appComponent.header = "autoinsurance";
    this.appComponent.page = "insurance";
    this.appComponent.section = "manage";
    this.appComponent.isVisible = true;
  }

}
