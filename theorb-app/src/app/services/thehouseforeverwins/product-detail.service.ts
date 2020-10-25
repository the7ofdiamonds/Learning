import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Product, ProductDetail } from '../../models/thehouseforeverwins/product';
import { ShopComponent } from 'src/app/pages/thehouseforeverwins/shop/shop.component';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {

  FULLFILLMENT_URL = environment.FULLFILLMENT_URL;
  product: Product;

  constructor(private http: HttpClient) { }

  apiKey = 'rzz83f74-w61p-5661:7d5s-7iahctbus4bj';
  base64 = btoa(this.apiKey);
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + this.base64
    })
  };

  getDetail(id): Observable<any> {
    return this.http.request<any>('GET', this.FULLFILLMENT_URL + '/' + id, this.httpOptions)
  }

}
