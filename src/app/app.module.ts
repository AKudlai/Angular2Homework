import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyTableComponent } from './my-table/my-table.component';
import { MyTableHostComponent } from './my-table-host/my-table-host.component';
import { FormsModule } from '@angular/forms';
import { ProductCreateComponent } from './product-create/product-create.component'
import { ProductService } from './services/product.service';
import { ProductAdminComponent } from './product-admin/product-admin.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomeComponent } from './home/home.component';
import { ProductViewComponent } from './product-view/product-view.component'

@NgModule({
  declarations: [
    AppComponent,
    MyTableComponent,
    MyTableHostComponent,
    ProductCreateComponent,
    ProductAdminComponent,
    ProductDetailsComponent,
    HomeComponent,
    ProductViewComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
