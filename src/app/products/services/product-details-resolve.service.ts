import { Injectable } from '@angular/core';
import { ProductService } from './product.service';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Product } from '../models/product';

@Injectable()
export class ProductDetailsResolveService implements Resolve<Product> {

  constructor(private service: ProductService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Product> {

    let id = +route.params['id']

    return this.service.getProduct(id).then(product => {
      if (product) {
          return product;}
      // } else {
      //     this.router.navigate(["/products"]);
      //     return false;
      // }
    });
  } 
}
