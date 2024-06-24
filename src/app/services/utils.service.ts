import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Subject } from 'rxjs';
import { TipoCarneDesc } from '../enums/tipo-carne';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  public userData: any;
  public userId: any;
  public userRol: any;
  private _storage: Storage | null = null;
  private authSubject = new Subject<any>();

  constructor(private storage: Storage) {
    //this.init();
    //this.storage.create();
   }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    //const storage = await this.storage.create();
    //this._storage = storage;
    /*this.userData = sessionStorage.getItem('nombres') + " " +  sessionStorage.getItem('apellidos');
    this.userId = await sessionStorage.getItem('userId');
    this.userRol = await sessionStorage.getItem('rol');*/

    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
  }

  // Create and expose methods that users of this service can
  // call, for example:
  public async set(key: string, value: any) {
    return this._storage?.set(key, value);
  }
  
  public async get(key: string): Promise<any> {
    return this._storage?.get(key);
  }

  public async remove(key: string): Promise<void> {
    await this._storage?.remove(key);
  }

  public async clear(): Promise<void> {
    await this._storage?.clear();
  } 

  publishAuth(data: any) {
    this.authSubject.next(data);
  }

  getObservable(): Subject<any> {
    return this.authSubject;
  }

  async saveLogin(userid:any, names:any, userrol:any){
    await this.storage.set('userid', userid);
    await this.storage.set('names', names);
    await this.storage.set('userrol', userrol);
  }

  async getLogin(){
    //this.storage.clear()
    this.userId = await this.storage.get('userid');
    this.userData = await this.storage.get('names');
    this.userRol = await this.storage.get('userrol');
    return true;
  }

  //CJ
  getDateToString(date: Date): string {
    // const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-indexed
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const milliseconds = String(date.getMilliseconds()).padStart(2, '0');
  
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${milliseconds}`;
  }
  convertDate(dateString: string): string {
    // Parse the date string assuming ISO 8601 format with UTC timezone
    const date = new Date(dateString);
  
    // Get the individual components
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-indexed
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getUTCHours()).padStart(2, '0'); // Convert to UTC hours
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const milliseconds = String(date.getMilliseconds()).padStart(3, '0');
  
    // Format the date in the desired format
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${milliseconds}`;
  }

  getTipoCarne(tipo: string): string {
    //const value = (myObject as { [key: string]: string })[propertyName]; // Type assertion
    const valor = (TipoCarneDesc as { [key: string]: string })[tipo];
    return valor;
  }

}
