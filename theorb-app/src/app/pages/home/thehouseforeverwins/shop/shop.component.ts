import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Product, ProductDetail } from 'src/app/models/thehouseforeverwins/product';
import { ProductsService } from 'src/app/services/thehouseforeverwins/products.service';
import { ProductDetailService } from 'src/app/services/thehouseforeverwins/product-detail.service';
import { idTokenResult } from '@angular/fire/auth-guard';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ProductComponent } from './product/product.component';
import { findIndex } from 'rxjs/operators';
import { Identifiers } from '@angular/compiler/src/render3/r3_identifiers';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  product: Product;
  products: Product[];
  productDetail: ProductDetail;
  productDetails: ProductDetail[];
  id: number;
  info: any[];
  variants: any[];

  constructor(public dialog: MatDialog, private productsService: ProductsService, private details: ProductDetailService, private http: HttpClient) {
  }

  ngOnInit() {
    this.productsService.getProducts().subscribe((prods) => {
      this.products = prods.result;
      console.log(this.products)
      this.details.getDetail(this.id).subscribe((info) => {
        this.info = info.result.sync_product
        this.variants = info.result.sync_variants
        console.log(this.variants)
      })

    })

  }

  isShown: boolean = false;
  isVisible: boolean = false;
  FULLFILLMENT_URL = environment.FULLFILLMENT_URL;
  apiKey = 'rzz83f74-w61p-5661:7d5s-7iahctbus4bj';
  base64 = btoa(this.apiKey);
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + this.base64
    })
  };

  openDetail(id: number) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.hasBackdrop = true;
    dialogConfig.panelClass = 'custom-modalbox';
    dialogConfig.data = id;

    return this.dialog.open(ProductComponent, dialogConfig)
  }
}
