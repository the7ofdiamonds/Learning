import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  amount;
  fees = Fees;
  fee;
  total;
  quoteForm = new FormGroup({
    name: new FormControl(''),
    to: new FormControl(''),
    amount: new FormControl(''),
    fee: new FormControl(''),
    total: new FormControl('')
  });

  constructor(private route: ActivatedRoute, private router: Router) { }

  @Input() getTotal(amount, fee) {

    return this.quoteForm.patchValue({
      total: this.total = parseFloat(`${amount}`) + parseFloat(`${fee}`)
    });
  }

  showInvoice() {
    return this.router.navigate(['invoice'], { relativeTo: this.route });
  }
}
