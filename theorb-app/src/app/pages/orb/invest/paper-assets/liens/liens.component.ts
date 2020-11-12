import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../../../../app.component'

@Component({
  selector: 'app-liens',
  templateUrl: './liens.component.html',
  styleUrls: ['./liens.component.css']
})
export class LiensComponent implements OnInit {

  constructor(public appComponent: AppComponent) { }

  ngOnInit(): void {
    this.appComponent.header = "liens";
    this.appComponent.page = "paperassets";
    this.appComponent.section = "invest";
    this.appComponent.isVisible = true;
  }

}
