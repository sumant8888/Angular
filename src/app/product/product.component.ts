import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../services/apiservice.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public productList:any;
  constructor(private api:ApiserviceService,private cart:CartService) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.productList=res;

      this.productList.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price})
      });
      console.log(this.productList)
    })
  }
  addToCart(item:any)
  {
    console.log(item)
    this.cart.addToCart(item);
  }
}
