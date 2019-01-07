import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { relative } from 'path';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  public product: Product;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private service: ProductService) { }

  ngOnInit() {
    this.activatedRoute.params.forEach((params: Params) => {
      let id = +params["id"];
      this.service.getProduct(id).then(result => this.product = result);
    });
  }

  goToProducts() {
    let pId = this.product ? this.product.id : null
    this.router.navigate(['../', { id: pId }], { relativeTo: this.activatedRoute} );
  }
}
