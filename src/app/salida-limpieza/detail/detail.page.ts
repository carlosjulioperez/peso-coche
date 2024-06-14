import { Component, OnInit } from '@angular/core';
import { Registro } from '../registro.model';
import { ActivatedRoute } from '@angular/router';
import { RegistroService } from '../registro.service';
import { FormControl, FormGroup } from '@angular/forms';
import { UtilsService } from 'src/app/utils.service';
import { NavController } from '@ionic/angular';

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
    private registroService: RegistroService, 
    private utilsService: UtilsService
  ){ 
    this.myForm = this.controles();
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const id = params['id'];
      this.registroService.getRegistros().subscribe(data => {
        this.registro = data.find(r => r.id === id);
        // console.log(this.registro);
        this.fillControls();
      })
    });
  }

  private controles(){
    return new FormGroup({
      id: new FormControl(), 
      tipo_carne: new FormControl('L'), 
      tipo_busqueda: new FormControl('C'),
      no_coche: new FormControl(),
      fecha: new FormControl(),
      completado: new FormControl()
    });
  }
  
  private fillControls(){
    this.setValue('id', this.registro.id);
    this.setValue('tipo_carne', this.registro.tipo_carne);
    this.setValue('tipo_busqueda', this.registro.tipo_busqueda);
    this.setValue('no_coche', this.registro.no_coche);
    this.setValue('fecha', this.registro.fecha);
    this.setValue('completado', false);
    
    // this.myForm.get('id')?.setValue(this.registro.id);
    // this.myForm.get('tipo_carne')?.setValue(this.registro.tipo_carne);
  }

  private setValue(nombre: string, valor: any){
    if (valor!==null && valor!== undefined)
      this.myForm.get(nombre)?.setValue(valor);
  }
  
  grabarParcial(){
    console.log(this.registro);
    console.log(this.myForm.value);
    
    this.myForm.get('fecha')?.setValue(this.utilsService.getTimestamp());
    this.registroService.updateSalidaLimpieza(this.myForm.value).then(resp=>{
      console.log("Actualizando registro...");
      console.log(resp);
      alert("Datos actualizados." + resp);
      this.navCtrl.navigateForward('salida-limpieza', {} );
    });
  }

  grabar(){
    this.myForm.get('completado')?.setValue(true);
    this.grabarParcial();
  }

}
