import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent {

  constructor(private route: ActivatedRoute, private router: Router) { }

  sendReceipt(): void {
    console.log('Receipt sent');
  }
}
