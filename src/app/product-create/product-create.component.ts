import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  @Input() Products: any;

  private product: any;

  constructor() { this.product = { id: 11, name: 'product 11', price: '1100', category: 'Category 1'}; }

  ngOnInit() {
  }

  addProduct(): void {
    this.Products.push(this.product);
  }
}
