import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  public products: Product[]
  constructor(private productService: ProductService, private router: Router) {
    this.productService.getAll().then(result => {
      return this.products = result;
    });
  }

  ngOnInit() {
  }

  showDetails(selected: Product){
    this.router.navigate(['product', selected.id])
  }
}
