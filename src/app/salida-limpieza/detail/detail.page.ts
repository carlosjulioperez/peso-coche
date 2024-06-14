import { Component, OnInit } from '@angular/core';
import { Registro } from '../registro.model';
import { ActivatedRoute } from '@angular/router';
import { RegistroService } from '../registro.service';
import { FormControl, FormGroup } from '@angular/forms';
import { UtilsService } from 'src/app/utils.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  registro!: Registro;
  myForm: FormGroup;

  constructor(private route: ActivatedRoute, private registroService: RegistroService, private utilsService: UtilsService) { 
    this.myForm = this.controles();
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const id = params['id'];
      this.registroService.getRegistros().subscribe(data => {
        this.registro = data.find(r => r.id === id);
        // console.log(this.registro);
      })
    });
  }

  private controles(){
    return new FormGroup({
      segTipoCarne: new FormControl('L'), 
      segTipoBusqueda: new FormControl('C'),
      txtCarrito: new FormControl(),
      txtFecha: new FormControl(this.utilsService.getTimestamp())
    });
  }
  
  grabar(){
    console.log(this.registro);
    console.log(this.myForm.value);
  }
}
