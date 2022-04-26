import { Component, OnInit } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public totalItem:number=0;
  constructor(private cart:CartService) { }

  ngOnInit(): void {
    this.cart.getProduct().subscribe(res=>{
      this.totalItem=res.length;
    })
  }

}
