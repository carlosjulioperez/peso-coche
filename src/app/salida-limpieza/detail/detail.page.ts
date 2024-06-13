import { Component, OnInit } from '@angular/core';
import { Registro } from '../registro.model';
import { ActivatedRoute } from '@angular/router';
import { RegistroService } from '../registro.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  registro!: Registro;
  segTipoCarne!: string; 
  segTipoBusqueda: string = "C";

  constructor(private route: ActivatedRoute, private registroService: RegistroService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const id = params['id'];
      this.registroService.getRegistros().subscribe(data => {
        this.registro = data.find(r => r.id === id);
        console.log(this.registro);
      })

      this.segTipoCarne = "L";
    });
  }

}
