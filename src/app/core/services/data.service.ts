import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  jsonDataResult: any;
  arreglo = [];
  pay = [];
  constructor(private http: HttpClient, private toastController: ToastController) { }

  getDataGuajalopas(): Observable<any> {
    return this.http.get("assets/dto/guajalopas.json");
  }
  getDataBebidas(): Observable<any> {
    return this.http.get("assets/dto/bebidas.json");
  }
  getDataTamales(): Observable<any> {
    return this.http.get("assets/dto/tamales.json");
  }
  getSaborsGuajalopas(): Observable<any> {
    return this.http.get("assets/dto/sabors/sabors-guajalotas.json");
  }
  getSaborsBebidas(): Observable<any> {
    return this.http.get("assets/dto/sabors/sabors-bebidas.json");
  }
  async AlertToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1000,
      position: "top",
      mode:"ios"
    });
    toast.present();
  }
  getCartData(uri:string,id: number, name: string, price:number, quantity: number,sabor:string) {
    try {
      if (id == null || name == "" || price == null || sabor == "" || quantity == null) {
        this.AlertToast(`Carro Vacio, si desea pedir algo, por favor seleccione los productos!`)
      } else {
        this.arreglo.push({uri:uri,id:id,name:name, price:price, quantity:quantity,sabor:sabor});
        this.AlertToast(`Productos agregados con exito!`);
      }
    } catch (error) {
      console.error(error);
    }
  }
  taxDataCart(){
    return this.arreglo;
  }
}
