import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { QuoteComponent } from 'src/app/components/forms/quote/quote.component';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'],
})

export class InvoiceComponent {
  @Input() fee;
  @Input() total;

  constructor(private route: ActivatedRoute, private router: Router, public quoteComponent: QuoteComponent) { }

  openReceipt() {
    const transaction = {
      Name: `${this.quoteComponent.name}`,
      To: `${this.quoteComponent.to.value}`,
      Amount: `${this.quoteComponent.amount.value}`,
      Fee: `${this.quoteComponent.fee.value}`,
      Total: `${this.quoteComponent.total}`
    };

    return console.log(JSON.stringify(transaction));
  }

  ngOninit() {
    return;
  }
}
