import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.page.html',
  styleUrls: ['./pay.page.scss'],
})
export class PayPage implements OnInit {

  constructor(private dto: DataService, private router: Router, private alertController: AlertController) { }

  ngOnInit() {
    this.show();
  }
  show() {
    console.log(this.dto.taxDataCart())
    return this.dto.taxDataCart();
  }
  async viewData() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Pagar!',
      message: 'Realmente desea pagar estos <strong>elementos?</strong>!!!',
      mode:"ios",
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
        }, {
          text: 'Okay',
          cssClass: 'secondary',
          handler: () => {
            const arr = this.dto.taxDataCart();
            arr.length = 0;
            this.dto.AlertToast("Gracias por su compra, si desea comprar, sera redirijido a el home!");
            this.router.navigateByUrl('/home');
          }
        }
      ]
    });

    await alert.present();
  }
}
