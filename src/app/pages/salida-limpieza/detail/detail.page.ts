import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Registro } from '../../../models/registro.model';
import { RegistroService } from '../../../services/registro.service';
import { UtilsService } from '../../../services/utils.service';
import { EstadoCoche } from '../../../enums/estado-coche';
import { TipoCarne } from '../../../enums/tipo-carne';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  registro!: Registro;
  myForm: FormGroup;
  
  constructor(
    private route: ActivatedRoute, 
    private navCtrl: NavController, 
    private alertCtrl: AlertController,
    private registroService: RegistroService, 
    private utilsService: UtilsService
  ){ 
    this.myForm = this.controles();
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const id = params['id'];
      this.registroService.getSalidaLimpieza().subscribe(data => {
        this.registro = data.find(r => r.id === id);
        // console.log(this.registro);
        this.fillControls();
      })
    });
  }

  private controles(){
    return new FormGroup({
      id: new FormControl(), 
      // tipo_carne: new FormControl('L'), 
      tipo_carne: new FormControl(TipoCarne.Lomo), 
      tipo_busqueda: new FormControl('C'),
      coche: new FormControl(),
      fecha_sa: new FormControl(),
      estado: new FormControl()
    });
  }
  
  private fillControls(){
    this.setValue('id', this.registro.id);
    this.setValue('tipo_carne', this.registro.tipo_carne);
    this.setValue('tipo_busqueda', this.registro.tipo_busqueda);
    // this.myForm.get('id')?.setValue(this.registro.id);
    // this.myForm.get('tipo_carne')?.setValue(this.registro.tipo_carne);
  }

  async confirmarGrabar(){
    const alert = await this.alertCtrl.create({
      header: 'Confirme',
      message: '¿Desea grabar los cambios?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Grabar',
          handler: () => {
            // Call your save function here
            this.grabar();
          },
        },
      ],
    });
    await alert.present();
  }

  private setValue(nombre: string, valor: any){
    if (valor!==null && valor!== undefined)
      this.myForm.get(nombre)?.setValue(valor);
  }
  
  grabar(){
    // console.log(this.registro);
    // console.log(this.myForm.value);
    
    this.setValue('fecha_sa', this.utilsService.getDateToString(new Date()));
    this.setValue('estado', EstadoCoche.Transferencia); //siguiente flujo

    this.registroService.updateSalidaLimpieza(this.myForm.value).then(resp=>{
      console.log("Actualizando registro...");
      console.log(resp);
      // alert("Datos actualizados." + resp);
      this.navCtrl.navigateForward('salida-limpieza', {} );
    });
  }

}
