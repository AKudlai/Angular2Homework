import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-row',
  templateUrl: './create-row.html',
  styleUrls: ['./create-row.css']
})
export class CreateRowComponent implements OnInit {

  @Input() Products: any;

  private product: any;

  constructor() { this.product = { id: 10, name: 'product 10', price: 1000, category: 'Category 1' }}

  ngOnInit() {
  }

  addProduct(): void {
    this.Products.push(this.product);
  }
}
