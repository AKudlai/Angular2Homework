import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { ProductAdminComponent } from './product-admin/product-admin.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductViewComponent } from './product-view/product-view.component';

import { ProductService } from '../products/services/product.service';

import { ProductRoutingModule } from "./product-routing.module";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ProductRoutingModule
  ],
  declarations: [
    ProductAdminComponent,
    ProductDetailsComponent,
    ProductViewComponent
  ],
  providers: [ProductService]
})
export class ProductModule { }