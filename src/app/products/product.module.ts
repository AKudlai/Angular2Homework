import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductViewComponent } from './product-view/product-view.component';

import { ProductService } from '../products/services/product.service';

import { ProductRoutingModule } from "./product-routing.module";
import { ProductDetailsDdComponent } from './product-details-dd/product-details-dd.component';
import { ProductDetailsResolveService } from "./services/product-details-resolve.service";
import { CommentsRoutingModule } from "../comments/comments-routing.module";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ProductRoutingModule,
    ReactiveFormsModule,
    CommentsRoutingModule
  ],
  declarations: [
    ProductDetailsComponent,
    ProductViewComponent,
    ProductDetailsDdComponent
  ],
  providers: [ProductService, ProductDetailsResolveService]
})
export class ProductModule { }