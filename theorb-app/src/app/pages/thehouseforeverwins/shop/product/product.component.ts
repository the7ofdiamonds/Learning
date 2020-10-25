import { Component, OnInit, Inject } from '@angular/core';
import { ShopComponent } from '../shop.component';
import { Product, ProductDetail } from 'src/app/models/thehouseforeverwins/product';
import { ProductDetailService } from 'src/app/services/thehouseforeverwins/product-detail.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  id: any;
  info: any[];
  variants: any[];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private router: ActivatedRoute, private details: ProductDetailService) { }

  ngOnInit() {
    this.id = this.router.snapshot.paramMap.get('id') || this.data;
    console.log(this.id)
    this.details.getDetail(this.id).subscribe((info) => {
      this.info = info.result.sync_product
      this.variants = info.result.sync_variants
      console.log(this.variants)
    })
  }

  addtoCart() {
    console.log('Added to cart')
  }
}
