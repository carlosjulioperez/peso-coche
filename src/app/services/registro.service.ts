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
    return this.http.get<any[]>(this.apiService.getApiUrl()+'/salidalimpieza')
  }

  getTransferencia(): Observable<any[]>{
    return this.http.get<any[]>(this.apiService.getApiUrl()+'/transferencia')
  }

  getNuevo(): Observable<any[]>{
    return this.http.get<any[]>(this.apiService.getApiUrl()+'/nuevo')
  }

  getPesaje(): Observable<any[]>{
    return this.http.get<any[]>(this.apiService.getApiUrl()+'/pesaje')
  }
  getAsignacion(): Observable<any[]>{
    return this.http.get<any[]>(this.apiService.getApiUrl()+'/asignacion')
  }

  getTara(): Observable<any[]>{
    return this.http.get<any[]>(this.apiService.getApiUrl()+'/tara')
  }

  updateSalidaLimpieza(values:any){
    return new Promise((resolve, reject) => {
      this.http.put(this.apiService.getApiUrl()+'/updatesalidalimpieza', 
      {
        tipo_carne: values.tipo_carne,     
        tipo_busqueda: values.tipo_busqueda, 
        coche: values.coche, 
        fecha_sa: values.fecha_sa, 
        estado: values.estado,
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
  
  updateTransferencia(values:any){
    return new Promise((resolve, reject) => {
      this.http.put(this.apiService.getApiUrl()+'/updatetransferencia', 
      {
        fecha_tr: values.fecha_tr, 
        coche_nuevo: values.coche_nuevo,
        estado: values.estado,
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
  
  updateNuevo(values:any){
    return new Promise((resolve, reject) => {
      this.http.put(this.apiService.getApiUrl()+'/updatenuevo', 
      {
        fecha_nu: values.fecha_nu, 
        turno_nuevo: values.turno_nuevo,
        estado: values.estado,
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
  
  updatePesaje(values:any){
    return new Promise((resolve, reject) => {
      this.http.put(this.apiService.getApiUrl()+'/updatepesaje', 
      {
        fecha_pe: values.fecha_pe, 
        peso_bruto: values.peso_bruto,
        estado: values.estado,
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
  
  updateAsignacion(values:any){
    return new Promise((resolve, reject) => {
      this.http.put(this.apiService.getApiUrl()+'/updateasignacion', 
      {
        fecha_as: values.fecha_as, 
        codigo_video_jet: values.codigo_video_jet,
        estado: values.estado,
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
  
  updateTara(values:any){
    return new Promise((resolve, reject) => {
      this.http.put(this.apiService.getApiUrl()+'/updatetara', 
      {
        fecha_ta: values.fecha_ta, 
        peso_tara: values.peso_tara,
        peso_neto: values.peso_neto,
        estado: values.estado,
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
