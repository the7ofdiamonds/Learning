import { Component} from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})

export class InvoiceComponent {

  constructor(private route: ActivatedRoute, private router: Router) { }

  openReceipt() {
    this.router.navigate(['receipt'], { relativeTo: this.route });
  }

}
