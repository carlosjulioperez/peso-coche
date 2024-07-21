import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //apiUrl:string = 'http://localhost/eurofish-api/public/api/v1';
  private apiUrl:string = 'http://localhost:3000/api';
  //apiUrl:string = 'http://192.168.248.179:3000';

  constructor(public http: HttpClient, public utils: UtilsService) { }

  getLogin(credentials:any, type:any){
    return new Promise((resolve, reject) => {
      //this.http.post(this.apiUrl+type, JSON.stringify(credentials), this.optionsHead).timeout(5000)
      this.http.post(this.apiUrl+type, credentials)
        .subscribe((res:any) => {
          //console.log(res);
          //resolve(res.json());
          resolve(res);
        }, (err) => {
          // console.error(err);
          reject(err);
        });
    });
  }

  getApiUrl(){
    return this.apiUrl;
  }

 
}