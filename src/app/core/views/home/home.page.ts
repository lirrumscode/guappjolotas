import { createHostListener } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  type: string;
  itemGuajalopas: any;
  itemBebidas: any;
  itemTamales: any;
  constructor(private router: Router, private dto: DataService, private toastController: ToastController) { }
  ngOnInit() {
    this.type = 'guajalotas';
    this.getGuajalopas();
    this.getTamales();
    this.getBebidas();
    this.welcomeToast();
  }
  goToSingle(item: any) {
    this.router.navigate(['/single', item.id]);
  }
  goToSingleBebidas(item: any) {
    this.router.navigate(['/single/bebidas/', item.id]);
  }
  goToSingleTamales(item: any) {
    this.router.navigate(['/single/tamales/', item.id]);
  }
  async getGuajalopas() {
    try {
      await this.dto.getDataGuajalopas().subscribe((data) => {
        this.itemGuajalopas = data;
      });
    } catch (error) {
      console.error(error);
    }
  }
  async getBebidas() {
    try {
      await this.dto.getDataBebidas().subscribe((data) => {
        this.itemBebidas = data;
      });
    } catch (error) {
      console.error(error);
    }
  }
  async getTamales() {
    try {
      await this.dto.getDataTamales().subscribe((data) => {
        this.itemTamales = data;
      });
    } catch (error) {
      console.error(error);
    }
  }
  async welcomeToast() {
    const toast = await this.toastController.create({
      message: 'Está app esta desarrollada y diseñada por Lirrumscode con la tecnologia de Ionic!',
      duration: 2000,
      position: "bottom",
      mode:"ios"
    });
    toast.present();
  }

  search(evt) {
    try {
      const event = evt.srcElement.value;
      if (!event) {
        return;
      }
      this.itemGuajalopas = this.itemGuajalopas.filter(item => {
        if (item.name && event) {
          return (item.name.toLowerCase().indexOf(event.toLowerCase()) > -1);
        }
      });
    } catch (error) {
      console.error(error)
    }
  }
}
