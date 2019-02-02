import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-details-dd',
  templateUrl: './product-details-dd.component.html',
  styleUrls: ['./product-details-dd.component.css']
})
export class ProductDetailsDdComponent implements OnInit {

  productDetailsForm: FormGroup;
  
  ngOnInit() {
    this.productDetailsForm = new FormGroup({
      name: new FormControl(''),
      price: new FormControl(''),
      category: new FormControl('')
    })
  }

  onSubmit(form) {
    console.log(form.valid);
    console.log(form.value)
  }
}
