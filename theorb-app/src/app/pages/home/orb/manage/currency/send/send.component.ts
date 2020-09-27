import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Fees } from '../../../../../../models/MockFees';
import { HttpClient } from '@angular/common/http'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.css']
})
export class SendComponent {
  fees = Fees;

  constructor(private fb: FormBuilder) { }

  quoteForm = this.fb.group({
    amount: new FormControl('', Validators.required),
    fee: new FormControl('', Validators.required)
  }, { updateOn: 'blur' });

  invoiceForm = this.fb.group({
    name: new FormControl('', Validators.required),
    to: new FormControl('', Validators.required),
  }, { updateOn: 'blur' });

  amount = this.quoteForm.value.amount;
  fee = this.quoteForm.value.fee;

  getTotal(amount, fee) {

   return parseFloat(`${this.amount}`) + parseFloat(`${this.fee}`);
  }

  total = this.getTotal(this.amount, this.fee);

// Receipt
getReceipt() {
  console.log('Receipt')
}

}
