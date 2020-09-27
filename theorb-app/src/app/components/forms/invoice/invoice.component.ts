import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { QuoteComponent } from 'src/app/components/forms/quote/quote.component';
import { AngularFireFunctions } from '@angular/fire/functions';
import * as firebase from 'firebase';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'],
})

export class InvoiceComponent {

  // tslint:disable-next-line: max-line-length
  constructor(private route: ActivatedRoute, private router: Router, public quoteComponent: QuoteComponent, public afFunctions: AngularFireFunctions) { }

  openReceipt() {
    const sendMoney = this.afFunctions.httpsCallable('sendMoney');
    const transaction = this.quoteComponent.quoteForm.value;
    return sendMoney(transaction)
      // .then(() => {
      //   this.router.navigate(['receipt'], { relativeTo: this.route });
      // });
  }

  ngOninit() {
    return;
  }
}