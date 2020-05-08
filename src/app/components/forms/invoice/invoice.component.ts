import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { QuoteComponent } from 'src/app/components/forms/quote/quote.component';
import {
  AngularFireFunctionsModule, AngularFireFunctions
} from '@angular/fire/functions';
import * as firebase from 'firebase';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'],
})

export class InvoiceComponent {
  @Input() fee;
  @Input() total;

  // tslint:disable-next-line: max-line-length
  constructor(private route: ActivatedRoute, private router: Router, public quoteComponent: QuoteComponent, public afFunctions: AngularFireFunctions) { }

  openReceipt() {
    // const transactionDetails = {
    //   Name: `${this.quoteComponent.name.value}`,
    //   To: `${this.quoteComponent.to.value}`,
    //   Amount: `${this.quoteComponent.amount.value}`,
    //   Fee: `${this.quoteComponent.fee.value}`,
    //   Total: `${this.quoteComponent.total}`
    // };

    // const sendMoney = firebase.functions().httpsCallable('sendMoney');

    // sendMoney(JSON.stringify(transactionDetails)
    // );

    console.log(this.quoteComponent.quoteForm.value);
  }

  ngOninit() {
    return;
  }
}
