import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, CanActivate } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { Fees } from 'src/app/models/MockFees';
import { MatInputModule, MatInput } from '@angular/material/input';

@Component({
  selector: 'app-quote-subscriber',
  templateUrl: './quote-subscriber.component.html',
  styleUrls: ['./quote-subscriber.component.css']
})
export class QuoteSubscriberComponent implements CanActivate {
  subscriber: boolean;
  name;
  to = new FormControl('');
  amount = new FormControl('');
  fees = Fees;
  fee = new FormControl('');
  subscriberFee;
  total;

  constructor(private route: ActivatedRoute, private router: Router, public matInput: MatInput) {
  }
  // tslint:disable-next-line: max-line-length
  canActivate(route: import('@angular/router').ActivatedRouteSnapshot, state: import('@angular/router').RouterStateSnapshot): boolean | import('@angular/router').UrlTree | import('rxjs').Observable<boolean | import('@angular/router').UrlTree> | Promise<boolean | import('@angular/router').UrlTree> {
    throw new Error('Method not implemented.');
  }

  showInvoice() {
    return this.router.navigate(['invoice-subscriber'], { relativeTo: this.route });
  }
}
