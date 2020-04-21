import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent {

  constructor(private route: ActivatedRoute, private router: Router) { }

  openAccounts() {
    this.router.navigate(['accounts'], { relativeTo: this.route });
  }

  openCurrency() {
    this.router.navigate(['currency'], { relativeTo: this.route });
  }

  openDebt() {
    this.router.navigate(['debt'], { relativeTo: this.route });
  }

  openInsurance() {
    this.router.navigate(['insurance'], { relativeTo: this.route });
  }
}
