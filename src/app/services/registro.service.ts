import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private http: HttpClient, private apiService: ApiService) { }

  getSalidaLimpieza(): Observable<any[]>{
    return this.http.get<any[]>(this.apiService.getApiUrl()+'/getall/salidalimpieza')
  }

  putSalidaLimpieza(values:any){
    return new Promise((resolve, reject) => {
      this.http.put(this.apiService.getApiUrl()+'/put/salidalimpieza', 
      {
        tipo_carne: values.tipo_carne,     
        coche: values.coche, 
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

  getTransferencia(): Observable<any[]>{
    return this.http.get<any[]>(this.apiService.getApiUrl()+'/getall/transferencia')
  }
  
  putTransferencia(values:any){
    return new Promise((resolve, reject) => {
      this.http.put(this.apiService.getApiUrl()+'/put/transferencia', 
      {
        coche_nuevo: values.coche_nuevo,
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

  getNuevo(): Observable<any[]>{
    return this.http.get<any[]>(this.apiService.getApiUrl()+'/getall/nuevo')
  }
  
  putNuevo(values:any){
    return new Promise((resolve, reject) => {
      this.http.put(this.apiService.getApiUrl()+'/put/nuevo', 
      {
        turno_nuevo: values.turno_nuevo,
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

  getPesaje(): Observable<any[]>{
    return this.http.get<any[]>(this.apiService.getApiUrl()+'/getall/pesaje')
  }

  putPesaje(values:any){
    return new Promise((resolve, reject) => {
      this.http.put(this.apiService.getApiUrl()+'/put/pesaje', 
      {
        peso_bruto: values.peso_bruto,
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

  getAsignacion(): Observable<any[]>{
    return this.http.get<any[]>(this.apiService.getApiUrl()+'/getall/asignacion')
  }
  
  putAsignacion(values:any){
    return new Promise((resolve, reject) => {
      this.http.put(this.apiService.getApiUrl()+'/put/asignacion', 
      {
        codigo_video_jet: values.codigo_video_jet,
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

  getTara(): Observable<any[]>{
    return this.http.get<any[]>(this.apiService.getApiUrl()+'/getall/tara')
  }

  putTara(values:any){
    return new Promise((resolve, reject) => {
      this.http.put(this.apiService.getApiUrl()+'/put/tara', 
      {
        peso_tara: values.peso_tara,
        peso_neto: values.peso_neto,
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
