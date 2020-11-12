import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../../../../app.component'

@Component({
  selector: 'app-bonds',
  templateUrl: './bonds.component.html',
  styleUrls: ['./bonds.component.css']
})
export class BondsComponent implements OnInit {

  constructor(public appComponent: AppComponent) { }

  ngOnInit(): void {
    this.appComponent.header = "bonds";
    this.appComponent.page = "paperassets";
    this.appComponent.section = "invest";
    this.appComponent.isVisible = true;
  }

}
