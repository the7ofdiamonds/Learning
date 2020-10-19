import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListingService {

  LISTING_URL = environment.LISTING_URL;

  constructor(private http: HttpClient) { }

  // apiKey = 'rzz83f74-w61p-5661:7d5s-7iahctbus4bj';
  // base64 = btoa(this.apiKey);
  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Authorization': 'Basic ' + this.base64
  //   })
  // };

  getListings(): Observable<any> {
    return this.http.request('GET', this.LISTING_URL);
  }

  getProperty(id: string): Observable<any> {
    return this.http.request('GET', 'https://api.bridgedataoutput.com/api/v2/OData/test/Property('+`${id}`+')?access_token=6baca547742c6f96a6ff71b138424f21')
  }
}
