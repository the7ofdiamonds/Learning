import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent {

  constructor(private route: ActivatedRoute, private router: Router) { }

  openInvoice() {
    this.router.navigate(['invoice'], { relativeTo: this.route });
  }


}
