import { Component, OnInit } from '@angular/core';
import { Registro } from '../registro.model';
import { RegistroService } from '../registro.service';
import { NavController, ViewWillEnter } from '@ionic/angular';

@Component({
  selector: 'app-master',
  templateUrl: './master.page.html',
  styleUrls: ['./master.page.scss'],
})
export class MasterPage implements ViewWillEnter {
  
  registros: Registro[] = [];

  constructor(private registroService: RegistroService, 
              private navCtrl: NavController
            ) { }

  ionViewWillEnter(){
    this.registroService.getRegistros().subscribe(data => {
      this.registros = data;
      // console.log(data);
    });
  }
  
  viewDetail(registro: Registro) {
    // Handle pushing to detail page with record data
    // console.log('oPushing to detail:', registro); // Replace with actual navigation logic
    this.navCtrl.navigateForward('salida-limpieza/detail', {
      queryParams: { id: registro.id }
    });
  }
}
