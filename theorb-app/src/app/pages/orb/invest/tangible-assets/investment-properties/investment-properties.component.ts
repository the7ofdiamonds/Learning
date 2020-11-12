import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../../../../app.component'

@Component({
  selector: 'app-investment-properties',
  templateUrl: './investment-properties.component.html',
  styleUrls: ['./investment-properties.component.css']
})
export class InvestmentPropertiesComponent implements OnInit {

  constructor(public appComponent: AppComponent) { }

  ngOnInit(): void {
    this.appComponent.header = "investmentproperties";
    this.appComponent.page = "tangibleassets";
    this.appComponent.section = "invest";
    this.appComponent.isVisible = true;
  }

}
