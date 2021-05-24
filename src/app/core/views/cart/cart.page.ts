import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  data:any;
  constructor(private dto: DataService, private router:Router) { }

  ngOnInit() {
    this.showDataCart()
  }
  showDataCart():any{
    this.data = this.dto.taxDataCart()
    return this.data;
  }
  goToPay(){
    this.router.navigateByUrl('/pay');
  }
}
