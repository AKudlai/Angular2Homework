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
    this.activatedRoute.params.forEach((params: Params) => {
      let id = +params['id'];
      this.service
        .getProduct(id)
        .then(result => {
          this.product = result;
          this.editName = this.product.name;
          this.editPrice = this.product.price;
          this.editCategory = this.product.category;
          this.productDetailsForm = new FormGroup({
            name: new FormControl(this.editName),
            price: new FormControl(this.editPrice),
            category: new FormControl(this.editCategory)
            });
        });
    });
  };

  onSubmit(form) {
    console.log(form.valid);
    console.log(form.value)
  }
}
