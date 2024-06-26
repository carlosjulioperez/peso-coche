import { Component, OnInit } from '@angular/core';
import { Registro } from '../../../models/registro.model';
import { RegistroService } from '../../../services/registro.service';
import { NavController, ViewWillEnter } from '@ionic/angular';
import { UtilsService } from '../../../services/utils.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.page.html',
  styleUrls: ['./master.page.scss'],
})
export class MasterPage implements ViewWillEnter {
  
  registros: Registro[] = [];

  constructor(private utilsService: UtilsService, private registroService: RegistroService, private navCtrl: NavController) { }

  ionViewWillEnter(){
    this.registroService.getPesaje().subscribe(data => {
      this.registros = data;
      //console.log(data);
    });
  }
  
  viewDetail(registro: Registro) {
    this.navCtrl.navigateForward('pesaje/detail', {
      queryParams: { id: registro.id }
    });
  }
  
  getTipoCarne(tipo: string): string {
    return this.utilsService.getTipoCarne(tipo);
  }

  getFechaNuevo(fecha: string): string {
    return this.utilsService.convertDate(fecha);
  }
}
