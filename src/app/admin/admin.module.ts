import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsAdminComponent } from './products-admin/products-admin.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { UsersAdminComponent } from './users-admin/users-admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductsAdminComponent,
    AdminHomeComponent,
    UsersAdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    BrowserModule,
    FormsModule
  ]
})
export class AdminModule { }
