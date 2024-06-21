import { Component, OnInit } from '@angular/core';
import { Registro } from '../../registro.model';
import { RegistroService } from '../../services/registro.service';
import { NavController, ViewWillEnter } from '@ionic/angular';
import { TipoCarneDesc } from 'src/app/enums/tipo-carne';

@Component({
  selector: 'app-master',
  templateUrl: './master.page.html',
  styleUrls: ['./master.page.scss'],
})
export class MasterPage implements ViewWillEnter {
  
  registros: Registro[] = [];

  constructor(private registroService: RegistroService, private navCtrl: NavController) { }

  ionViewWillEnter(){
    this.registroService.getTransferencia().subscribe(data => {
      this.registros = data;
    });
  }
  
  viewDetail(registro: Registro) {
    this.navCtrl.navigateForward('transferencia/detail', {
      queryParams: { id: registro.id }
    });
  }
  getTipoCarne(tipo: string): string {
    //const value = (myObject as { [key: string]: string })[propertyName]; // Type assertion
    const valor = (TipoCarneDesc as { [key: string]: string })[tipo];
    return valor;
  }
}
