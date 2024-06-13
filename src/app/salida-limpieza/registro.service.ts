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
}
