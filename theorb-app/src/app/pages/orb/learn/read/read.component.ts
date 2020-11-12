import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../../../app.component'

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  constructor(public appComponent: AppComponent) { }

  ngOnInit(): void {
    this.appComponent.header = "read";
    this.appComponent.page = "learn";
    this.appComponent.section = "learn";
    this.appComponent.isVisible = true;
  }

}
