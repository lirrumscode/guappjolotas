import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-single',
  templateUrl: './single.page.html',
  styleUrls: ['./single.page.scss'],
})
export class SinglePage implements OnInit {
  id: any;
  received: any;
  dataObject:any = {};
  counter: number = 1;
  saborsGuajalotas: any;
  sabor:any;
  constructor(private router: Router, private route: ActivatedRoute, public dto: DataService, private toastController: ToastController) { }

  ngOnInit() {
    this.route.params.subscribe((data:any) => {
      this.id = data;
    });
    this.conditionData();
    this.guajalotaSabors();
  }
  async conditionData() {
    try {
      const data = await this.dto.getDataGuajalopas().subscribe((data:any) => {
        const items = data.find((item) => item.id === parseInt(this.id.id));
        this.dataObject = items;
       // return this.dataObject;
      });
      return data;
    } catch (error) {
      console.error(error);
    }
  }
  moreCounter() {
    return (this.counter = this.counter + 1);
  }
  lessCounter() {
    return (this.counter = this.counter - 1);
  }
  async guajalotaSabors() {
    await this.dto.getSaborsGuajalopas().subscribe((data:any) => {
      this.saborsGuajalotas = data;
    })
  }
  goToCart() {
    this.router.navigateByUrl('cart');
  }
  async selectedSabors(items) {
    const toast = await this.toastController.create({
      message: `has seleccionado: ${items.name}`,
      duration: 1000,
      position: "top"
    });
    toast.present();
    localStorage.setItem("name", items.name)
  }
  addCartData(dataObject){
      this.sendData(dataObject.uri,dataObject.id, dataObject.slug, dataObject.price, this.counter, localStorage.getItem("name"));
  }
  sendData(uri,id,name,price,quantity,sabor){
    this.dto.getCartData(uri,id,name,price,quantity,sabor);
  }
}

