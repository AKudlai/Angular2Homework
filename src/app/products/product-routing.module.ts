import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { CanDeactivateGuardService } from '../services/can-deactivate-guard.service';
import { ProductDetailsDdComponent } from './product-details-dd/product-details-dd.component';
import { ProductDetailsResolveService } from './services/product-details-resolve.service';

const routing: Routes = [
  {
    path: 'products',
    component: ProductViewComponent,
    children: [
      {
        outlet: 'first',
        path: ':id',
        component: ProductDetailsComponent,
        // canDeactivate: [CanDeactivateGuardService]
        resolve: { 
          product: ProductDetailsResolveService
        }
      },
      {
        outlet: 'second',
        path: ':id',
        component: ProductDetailsDdComponent,
        resolve: { 
          product: ProductDetailsResolveService
        }        
      }
    ]
  },
  // {
  //   path: 'product/:id',
  //   component: ProductDetailsComponent
  // }
]

@NgModule({
  imports: [RouterModule.forChild(routing)],
  exports: [RouterModule]
})

export class ProductRoutingModule { }