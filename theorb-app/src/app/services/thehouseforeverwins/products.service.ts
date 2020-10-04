import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Product } from '../../models/thehouseforeverwins/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  TEST_URL = 'https://api.printful.com/store/products';
  FULLFILLMENT_URL = environment.FULLFILLMENT_URL;
  constructor(private http: HttpClient) { }

  apiKey = 'rzz83f74-w61p-5661:7d5s-7iahctbus4bj';
  base64 = btoa(this.apiKey);
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + this.base64
    })
  };

  getProducts(): Observable<any> {
    return this.http.request('GET', this.FULLFILLMENT_URL, this.httpOptions);
  }

  getBoardGames(): Observable<any> {
    return this.http.request('GET', this.FULLFILLMENT_URL + '/196254942', this.httpOptions)
  }

  getBackpack(): Observable<any> {
    return this.http.request('GET', this.FULLFILLMENT_URL + '/196257109', this.httpOptions)
  }

  getBooks(): Observable<any> {
    return this.http.request('GET', this.FULLFILLMENT_URL + '/196254942', this.httpOptions)
  }

  getHats(): Observable<any> {
    return this.http.request('GET', this.FULLFILLMENT_URL + '/120382880', this.httpOptions)
  }

  getLongsleeves(): Observable<any> {
    return this.http.request('GET', this.FULLFILLMENT_URL + '/120382745', this.httpOptions)
  }

  getTshirt(): Observable<any> {
    return this.http.request('GET', this.FULLFILLMENT_URL + '/120382635', this.httpOptions)
  }

}
