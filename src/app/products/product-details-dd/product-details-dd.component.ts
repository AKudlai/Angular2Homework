import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Product } from '../models/product';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details-dd',
  templateUrl: './product-details-dd.component.html',
  styleUrls: ['./product-details-dd.component.css']
})
export class ProductDetailsDdComponent implements OnInit {

  productDetailsForm: FormGroup;
  public product: Product;
  public editName: string;
  public editPrice: number;
  public editCategory: string;
  
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private service: ProductService) { }

  ngOnInit() {
    this.activatedRoute.data.forEach((data: { product: Product }) => {
      this.product = data.product;
      this.editName = data.product.name;
      this.editPrice = data.product.price;
      this.editCategory = data.product.category;          
      this.productDetailsForm = new FormGroup({
        name: new FormControl(this.editName),
        price: new FormControl(this.editPrice),
        category: new FormControl(this.editCategory)
        });
      });
  };

  saveProduct(form) {
    this.product.name = this.editName;
    this.product.price = this.editPrice;
    this.product.category = this.editCategory;
    this.goToProducts();
  }

  goToProducts() {
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
  }

  onSubmit(form) {
    this.product.name = form.value.name;
    this.product.price = form.value.price;
    this.product.category = form.value.category;
    console.log(form.valid);
    console.log(form.value)
    this.goToProducts();
  }
}
