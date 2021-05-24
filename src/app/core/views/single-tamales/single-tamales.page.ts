import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-single-tamales',
  templateUrl: './single-tamales.page.html',
  styleUrls: ['./single-tamales.page.scss'],
})
export class SingleTamalesPage implements OnInit {
  id: any;
  received: any;
  dataObject:any = {};
  counter: number = 1;
  saborsTamales: any;
  constructor(private router: Router, private route: ActivatedRoute, public dto: DataService, private toastController: ToastController) { }

  ngOnInit() {
    this.route.params.subscribe((data :any) => {
      this.id = data;
    });
    this.conditionData();
    this.guajalotaSabors();
  }
  async guajalotaSabors() {
    await this.dto.getSaborsGuajalopas().subscribe((data :any) => {
      this.saborsTamales = data;
    })
  }
  async selectedSabors(items) {
    const toast = await this.toastController.create({
      message: `has seleccionado: ${items.name}`,
      duration: 2000,
      position: "top"
    });
    toast.present();
  }
  async conditionData() {
    try {
      await this.dto.getDataTamales().subscribe((data :any) => {
        const items = data.find((item) => item.id === parseInt(this.id.id));
        this.dataObject = items;
        //return this.dataObject;
      });
      //return data;
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
  goToCart() {
    this.router.navigateByUrl('cart');
  }
  addCartData(dataObject) {
    this.sendData(dataObject.uri, dataObject.id, dataObject.name, dataObject.price, this.counter, localStorage.getItem("name"));
  }
  sendData(uri, id, name, price, quantity, sabor) {
    this.dto.getCartData(uri, id, name, price, quantity, sabor);
  }
}
