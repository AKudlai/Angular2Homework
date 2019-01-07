import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductAdminComponent } from './product-admin/product-admin.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { UsersAdminComponent } from './users-admin/users-admin.component';

@NgModule({
  declarations: [
    ProductAdminComponent,
    AdminHomeComponent,
    UsersAdminComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
