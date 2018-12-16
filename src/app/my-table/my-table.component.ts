import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent implements OnInit {

  @Input() rows: number = 0;

  public Products: any = [
    { id: 1, name: 'product 1', price: 100, category: 'Category 1' },
    { id: 2, name: 'product 2', price: 200, category: 'Category 2' },
    { id: 3, name: 'product 3', price: 300, category: 'Category 3' },
    { id: 4, name: 'product 4', price: 400, category: 'Category 1' },
    { id: 5, name: 'product 5', price: 500, category: 'Category 2' },
    { id: 6, name: 'product 6', price: 600, category: 'Category 3' },
    { id: 7, name: 'product 7', price: 700, category: 'Category 1' },
    { id: 8, name: 'product 8', price: 800, category: 'Category 2' },
    { id: 9, name: 'product 9', price: 900, category: 'Category 3' },
    { id: 10, name: 'product 10', price: 1000, category: 'Category 1' }
  ];
  public options: Array<string> = ['Category 1', 'Category 2', 'Category 3'];
  public selected: string;
  public selectedData: any;

  constructor() { this.selectedData = this.Products; }

  ngOnInit() {
  }

  onSelect(val) {
    if(val != 'all'){
      this.selectedData = this.Products.filter(p => p.category == val);
    }
    else {
      this.selectedData = this.Products;
    }

  }

  deleteRow(index) {
    this.Products.splice(index, 1);
  }
}
