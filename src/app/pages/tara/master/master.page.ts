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
    this.registroService.getTara().subscribe(data => {
      this.registros = data;
      //console.log(data);
    });
  }
  
  viewDetail(registro: Registro) {
    this.navCtrl.navigateForward('tara/detail', {
      queryParams: { id: registro.id }
    });
  }
  
  getFechaAsignacion(fecha: string): string {
    return this.utilsService.getFechaUTC5(fecha);
  }
}
