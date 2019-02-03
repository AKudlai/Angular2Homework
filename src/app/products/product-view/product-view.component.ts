import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  public products: Product[];
  private selectedId: number;

  constructor(
    private productService: ProductService, 
    private router: Router,
    private activatedRoute: ActivatedRoute) {  }

  ngOnInit() {
    this.activatedRoute.params.forEach((params: Params) => {
      this.selectedId = +params['id'];
      this.productService
        .getAll()
        .then(result => this.products = result);
    });
  }

  showDetails(selected: Product) {
    this.router.navigate([{ outlets: { 'first': [selected.id], 'second': [selected.id]}}], { relativeTo: this.activatedRoute })
  }

  isSelected(product: Product ) : boolean {
    return product.id == this.selectedId;
  }
}
