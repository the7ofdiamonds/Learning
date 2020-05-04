import { Injectable } from '@angular/core';
import { Fees } from '../../../models/MockFees';


@Injectable()
export class TransactionsService {
 fees = Fees;
  constructor() { }

  getFees() {
    return this.fees;
  }
}
