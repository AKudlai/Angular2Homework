import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AdminHomeComponent } from "./admin-home/admin-home.component";
import { ProductsAdminComponent } from "./products-admin/products-admin.component";
import { UsersAdminComponent } from "./users-admin/users-admin.component";
import { AuthGuardService } from "../services/auth-guard.service";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'admin',
        component: AdminHomeComponent,
        canActivate: [AuthGuardService],
        children: [{
          path: '',
          children: [
            { path: 'products', component: ProductsAdminComponent },
            { path: 'users', component: UsersAdminComponent },
            { path: '', redirectTo: 'products', pathMatch: 'full' }
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