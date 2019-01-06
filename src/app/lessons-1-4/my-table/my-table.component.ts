import { Component, OnInit, Input, Output } from '@angular/core';
import { MyTableService } from '../services/my-table.service';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent implements OnInit {

  @Input() rows: number = 0;

  public Products: any;
  public options: Array<string> = ['Category 1', 'Category 2', 'Category 3'];
  public selected: string;
  public selectedData: any;

  constructor(private myTableService: MyTableService) {
    this.Products = myTableService.Products;
    this.selectedData = this.Products;
  }
  
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
