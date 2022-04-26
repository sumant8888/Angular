import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartCompComponent } from './cart-comp/cart-comp.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path:'product',component:ProductComponent
  },
  {path:'cart',component:CartComponent },
  {path:'',redirectTo:'product', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
