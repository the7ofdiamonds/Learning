import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../../../../app.component'

@Component({
  selector: 'app-life-insurance',
  templateUrl: './life-insurance.component.html',
  styleUrls: ['./life-insurance.component.css']
})
export class LifeInsuranceComponent implements OnInit {

  constructor(public appComponent: AppComponent) { }

  ngOnInit(): void {
    this.appComponent.header = "lifeinsurance";
    this.appComponent.page = "insurance";
    this.appComponent.section = "manage";
    this.appComponent.isVisible = true;
  }

}
