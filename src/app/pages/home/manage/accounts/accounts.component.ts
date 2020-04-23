import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {

  constructor(private route: ActivatedRoute, private router: Router) { }

  openAccountDetail() {
    this.router.navigate(['accountdetail'], { relativeTo: this.route });
  }

}
