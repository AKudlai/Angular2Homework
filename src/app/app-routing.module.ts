import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyTableHostComponent } from './my-table-host/my-table-host.component';
import { ProductAdminComponent } from './product-admin/product-admin.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomeComponent } from './home/home.component';
import { ProductViewComponent } from './product-view/product-view.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: 'products',
    component: ProductViewComponent
  },
  {
    path: 'product/:id',
    component: ProductDetailsComponent
  },
  {
    path: 'admin',
    component: ProductAdminComponent
  },
  {
    path: 'my-table',
    component: MyTableHostComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
