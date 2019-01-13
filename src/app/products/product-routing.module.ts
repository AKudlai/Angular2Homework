import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { CanDeactivateGuardService } from '../services/can-deactivate-guard.service';

const routing: Routes = [
  {
    path: 'products',
    component: ProductViewComponent,
    children: [
      {
        path: ':id',
        component: ProductDetailsComponent,
        canDeactivate: [CanDeactivateGuardService]
      }
    ]
  },
  // {
  //   path: 'product/:id',
  //   component: ProductDetailsComponent
  // },
]

@NgModule({
  imports: [RouterModule.forChild(routing)],
  exports: [RouterModule]
})

export class ProductRoutingModule { }