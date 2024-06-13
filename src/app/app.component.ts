import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { UtilsService } from './utils.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  nama_cust:any;

  public appPages = [
    { title: 'Inicio', url: '/home', icon: 'car' }
  ];

  constructor(private router: Router, private menuCtrl: MenuController, public utils: UtilsService, private storage: Storage) {
    if(this.nama_cust == null){
      //CJ this.logout();
      //this.logout();
    }
  }

  async aprobarLogin(){
    let estado = await this.utils.getLogin();
    if(estado){
      this.nama_cust = this.utils.userData;

      this.appPages = [
        { title: 'Inicio', url: '/home', icon: 'home' }
      ];

      switch(this.utils.userRol){
        case "bus":
          this.appPages.push({ title: 'Bus', url: '/bus', icon: 'car' });
          break;
        case "buseta":
          this.appPages.push({ title: 'Buseta', url: '/buseta', icon: 'search' });
          break;
        case "taxi":
          this.appPages.push({ title: 'Taxi', url: '/taxi', icon: 'people' });
          break;
        case "admin":
          this.appPages.push({ title: 'Salida Limpieza', url: '/salida-limpieza', icon: 'file-tray-full' });
          this.appPages.push({ title: 'Coche Transferencia', url: '/coche-transferencia', icon: 'file-tray-stacked' });
          this.appPages.push({ title: 'Coche Nuevo', url: '/coche-nuevo', icon: 'file-tray' });
          this.appPages.push({ title: 'Coche Tara', url: '/coche-tara', icon: 'reload-circle' });
          this.appPages.push({ title: 'Asignación Coche', url: '/asignacion-coche', icon: 'scan-circle' });
          this.appPages.push({ title: 'Pesaje Coche', url: '/pesaje-coche', icon: 'sync-circle' });
          break;
      }
    }
  }

  async ngOnInit() {

    await this.storage.create();
    await this.utils.getLogin();

    console.log("carga appcomponente")
    this.utils.getObservable().subscribe((data) => {
        if(data.user){
            if(data.user == "login"){
                this.aprobarLogin();
                console.log("aprobar login")
            }
            if(data.user == "closeSesion"){
              //this.sesionExpirada();
              console.log("cerrar sesion")
            }
        }
    })
  }

  async logout(){
    console.log("salir");
    this.utils.clear();
    this.menuCtrl.close();
    this.router.navigate(['']);
  }
}
