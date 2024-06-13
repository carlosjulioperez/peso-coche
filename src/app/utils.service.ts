import { Injectable } from '@angular/core';
//import { Storage } from '@ionic/storage';
import { Storage } from '@ionic/storage-angular';
import { Subject } from 'rxjs';

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
}
