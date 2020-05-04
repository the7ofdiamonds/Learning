import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { QuoteSubscriberComponent } from 'src/app/components/forms/quote/quote-subscriber/quote-subscriber.component';


@Component({
  selector: 'app-invoice-subscriber',
  templateUrl: './invoice-subscriber.component.html',
  styleUrls: ['./invoice-subscriber.component.css']
})
export class InvoiceSubscriberComponent implements OnInit {
  beginningbalance;
  endingbalance;
  lasttransactionid;

  constructor(private route: ActivatedRoute, private router: Router, public quoteSubscriberComponent: QuoteSubscriberComponent) {
    this.beginningbalance = 500;
    this.endingbalance = 499;
    this.lasttransactionid = 0;
  }

  openReceipt() {
    const subscriberTransaction = {
      Name: `${this.quoteSubscriberComponent.name}`,
      To: `${this.quoteSubscriberComponent.to.value}`,
      Amount: `${this.quoteSubscriberComponent.amount.value}`,
      Fee: `${this.quoteSubscriberComponent.subscriberFee}`,
      Total: `${this.quoteSubscriberComponent.total}`,
      BeginningBalance: `${this.beginningbalance}`,
      EndingBalance: `${this.endingbalance}`,
      LastTransactionID: `${this.lasttransactionid}`,
    };
    return console.log(JSON.stringify(subscriberTransaction));
  }

  ngOnInit(): void {
  }

}
