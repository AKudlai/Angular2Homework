import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product'

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  @Input() Products: Product[];

  private product: Product;

  constructor() { this.product = { id: 10, name: 'product 10', price: 1000, category: 'Category 1' }}

  ngOnInit() {
  }

  addProduct(): void {
    this.Products.push(this.product);
  }
}
