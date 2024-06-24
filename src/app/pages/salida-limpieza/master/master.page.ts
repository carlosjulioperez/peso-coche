import { Component, OnInit } from '@angular/core';
import { Registro } from '../../../models/registro.model';
import { RegistroService } from '../../../services/registro.service';
import { NavController, ViewWillEnter } from '@ionic/angular';

@Component({
  selector: 'app-master',
  templateUrl: './master.page.html',
  styleUrls: ['./master.page.scss'],
})
export class MasterPage implements ViewWillEnter {
  
  registros: Registro[] = [];

  constructor(private registroService: RegistroService, private navCtrl: NavController) { }

  ionViewWillEnter(){
    this.registroService.getSalidaLimpieza().subscribe(data => {
      this.registros = data;
    });
  }
  
  viewDetail(registro: Registro) {
    this.navCtrl.navigateForward('salida-limpieza/detail', {
      queryParams: { id: registro.id }
    });
  }
}
