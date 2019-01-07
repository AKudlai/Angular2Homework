import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AdminHomeComponent } from "./admin-home/admin-home.component";
import { ProductAdminComponent } from "./product-admin/product-admin.component";
import { UsersAdminComponent } from "./users-admin/users-admin.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'admin',
        component: AdminHomeComponent,
        children: [{
          path: '',
          children: [
            { path: 'products', component: ProductAdminComponent },
            { path: 'users', component: UsersAdminComponent },
            { path: '', redirectTo: 'phrases', pathMatch: 'full' }
          ]
        }]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})

export class AdminRoutingModule {

}