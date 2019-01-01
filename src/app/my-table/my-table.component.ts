import { Component, OnInit, Input, Output } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product'
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent implements OnInit {

  @Input() rows: number = 0;

  public products: Product[];
  public options: Array<string> = ['Category 1', 'Category 2', 'Category 3'];
  public selected: string;
  public selectedData: Product[];

  constructor(private productService: ProductService, private router: Router) {
    this.productService.getAll().then(result => {
      return this.products = result;
    });
  }
  
  ngOnInit() {
    this.selectedData = this.products;
  }

  onSelect(val) {
    if(val != 'all'){
      this.selectedData = this.products.filter(p => p.category == val);
    }
    else {
      this.selectedData = this.products;
    }

  }

  showDetails(selected: Product){
    this.router.navigate(['product', selected.id])
  }

  deleteRow(index) {
    this.products.splice(index, 1);
  }
}
