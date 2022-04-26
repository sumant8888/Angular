import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public product:any=[];
  public grandtotal:any=0
  constructor(private cart:CartService) { 
    this.cart.getProduct().subscribe(res=>{
      this.product=res ;
      this.grandtotal=this.cart.getTotalPrice();
    })
  }

  ngOnInit(): void {
  }
  removeItem(item:any)
  {
    this.cart.removeCartItem(item);
  }
  // removeAllItem()
  // {
  //   this.cart.removeAllItem()
  // }
}
