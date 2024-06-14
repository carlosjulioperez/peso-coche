import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private http: HttpClient, private apiService: ApiService) { }

  getRegistros(): Observable<any[]>{
    return this.http.get<any[]>(this.apiService.getApiUrl()+'/salidalimpieza')
  }


  updateSalidaLimpieza(values:any){
    return new Promise((resolve, reject) => {
      this.http.put(this.apiService.getApiUrl()+'/updatesalidalimpieza', 
      {
        tipo_carne: values.tipo_carne,     
        tipo_busqueda: values.tipo_busqueda, 
        no_coche: values.no_coche, 
        fecha: values.fecha, 
        completado: values.completado,
        id: values.id
      }, {})
        .subscribe((res:any) => {
          //resolve(res.json());
          resolve(res);
        }, (err) => {
          reject(err);
          //console.log(err);
        });
    });
  }
}
