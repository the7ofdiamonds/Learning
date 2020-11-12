import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../../../app.component'

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.css']
})
export class SimulationComponent implements OnInit {

  constructor(public appComponent: AppComponent) { }

  ngOnInit(): void {
    this.appComponent.header = "simulation";
    this.appComponent.page = "learn";
    this.appComponent.section = "learn";
    this.appComponent.isVisible = true;
  }

}
