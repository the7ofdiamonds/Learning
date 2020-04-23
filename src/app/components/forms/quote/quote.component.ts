import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
  providers: [TransactionsService]
})
export class QuoteComponent implements OnInit {

  public fees = [];

  constructor(private transactionService: TransactionsService, private route: ActivatedRoute, private router: Router) { }

  openInvoice() {
    this.router.navigate(['invoice'], { relativeTo: this.route });
  }

ngOnInit(){
  this.fees = this.transactionService.getFees();
}
}
