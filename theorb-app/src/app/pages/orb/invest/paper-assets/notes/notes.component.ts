import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../../../../app.component'

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor(public appComponent: AppComponent) { }

  ngOnInit(): void {
    this.appComponent.header = "notes";
    this.appComponent.page = "paperassets";
    this.appComponent.section = "invest";
    this.appComponent.isVisible = true;
  }

}
