import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-sendmoney',
  templateUrl: './sendmoney.component.html',
  styleUrls: ['./sendmoney.component.css']
})
export class SendmoneyComponent {

  constructor(private route: ActivatedRoute, private router: Router) { }

  openQuote() {
    this.router.navigate(['quote'], { relativeTo: this.route });
  }
}
