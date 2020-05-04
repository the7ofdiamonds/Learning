import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { Fees } from 'src/app/models/MockFees';
import { MatInputModule, MatInput } from '@angular/material/input';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
  providers: [MatInputModule, MatInput]
})

export class QuoteComponent {
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

  @Input() getTotal(amount, fee) {
    return this.total = parseFloat(`${amount.value}`) + parseFloat(`${fee.value}`);
  }

  showInvoice() {
    return this.router.navigate(['invoice'], { relativeTo: this.route });
  }
}
