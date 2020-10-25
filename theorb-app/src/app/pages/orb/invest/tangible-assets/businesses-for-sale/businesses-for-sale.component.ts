import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  listingNumber: number;
  price: number;
  roi: number;
  net: number;
  revenue: number;
  category: string;
  title: string;  
}

const ELEMENT_DATA: PeriodicElement[] = [
  { listingNumber: 1, category: 'Beauty, Retail', title: 'Established Lash & Brow Studio for Sale in SW Las Vegas!', price: 75000, net: 38400, revenue: 191012, roi: 10 },
  { listingNumber: 2, category: 'Beauty, Retail', title: 'Established Lash & Brow Studio for Sale in SW Las Vegas!', price: 75000, net: 38400, revenue: 191012, roi: 11 },
  { listingNumber: 3, category: 'Beauty, Retail', title: 'Established Lash & Brow Studio for Sale in SW Las Vegas!', price: 75000, net: 38400, revenue: 191012, roi: 12 },
  { listingNumber: 4, category: 'Beauty, Retail', title: 'Established Lash & Brow Studio for Sale in SW Las Vegas!', price: 75000, net: 38400, revenue: 191012, roi: 13 },
  { listingNumber: 5, category: 'Beauty, Retail', title: 'Established Lash & Brow Studio for Sale in SW Las Vegas!', price: 75000, net: 38400, revenue: 191012, roi: 14 },
  { listingNumber: 6, category: 'Beauty, Retail', title: 'Established Lash & Brow Studio for Sale in SW Las Vegas!', price: 75000, net: 38400, revenue: 191012, roi: 15 },
  { listingNumber: 7, category: 'Beauty, Retail', title: 'Established Lash & Brow Studio for Sale in SW Las Vegas!', price: 75000, net: 38400, revenue: 191012, roi: 16 },
  { listingNumber: 8, category: 'Beauty, Retail', title: 'Established Lash & Brow Studio for Sale in SW Las Vegas!', price: 75000, net: 38400, revenue: 191012, roi: 17 },
  { listingNumber: 9, category: 'Beauty, Retail', title: 'Established Lash & Brow Studio for Sale in SW Las Vegas!', price: 75000, net: 38400, revenue: 191012, roi: 18 },
  { listingNumber: 10, category: 'Beauty, Retail', title: 'Established Lash & Brow Studio for Sale in SW Las Vegas!', price: 75000, net: 38400, revenue: 191012, roi: 19 }
];

@Component({
  selector: 'app-businesses-for-sale',
  templateUrl: './businesses-for-sale.component.html',
  styleUrls: ['./businesses-for-sale.component.css']
})
export class BusinessesForSaleComponent implements AfterViewInit {

  displayedColumns: string[] = ['title', 'listingNumber', 'price', 'category', 'net', 'revenue', 'roi'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

}
