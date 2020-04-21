import { Component } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent {

  constructor(private route: ActivatedRoute, private router: Router) { }

  openSendMoney() {
    this.router.navigate(['sendmoney'], { relativeTo: this.route });
  }

  openBillPayment() {
    this.router.navigate(['billpayment'], { relativeTo: this.route });
  }

  openReceiveMoney() {
    this.router.navigate(['receivemoney'], { relativeTo: this.route });
  }

}
