import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TransactionsService {

  constructor() { }

  getFees() {
    return [
      {'One Time Fee': 1},
      {'Monthly Fee': 10},
      {'Annual Fee': 100}
    ];
  }
}
