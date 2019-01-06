import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductAdminComponent } from './product-admin/product-admin.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductViewComponent } from './product-view/product-view.component';

const routing: Routes = [
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
      }]

@NgModule({
    imports: [RouterModule.forChild(routing)],
    exports: [RouterModule]
})

export class ProductRoutingModule {}