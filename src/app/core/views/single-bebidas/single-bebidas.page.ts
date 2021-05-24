import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-single-bebidas',
  templateUrl: './single-bebidas.page.html',
  styleUrls: ['./single-bebidas.page.scss'],
})
export class SingleBebidasPage implements OnInit {
  id: any;
  received: any;
  dataObject:any = {};
  counter: number = 1;
  saborsBebidas: any;
  constructor(private router: Router, private route: ActivatedRoute, public dto: DataService, private toastController: ToastController) { }

  ngOnInit() {
    this.route.params.subscribe((data :any) => {
      this.id = data;
    });
    this.conditionData();
    this.guajalotaSabors();
  }
  async guajalotaSabors() {
    await this.dto.getSaborsBebidas().subscribe((data :any) => {
      this.saborsBebidas = data;
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
        await this.dto.getDataBebidas().subscribe((data :any) => {
        const items = data.find((item) => item.id === parseInt(this.id.id));
        this.dataObject = items;
       // return this.dataObject;
      });
      //console.log(data)
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
