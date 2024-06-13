import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { UtilsService } from '../utils.service';
//import { Storage } from '@ionic/storage';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  myForm: FormGroup;

  constructor(private router: Router, public fb: FormBuilder, public apiService: ApiService, public utils: UtilsService, public loadingCtrl: LoadingController, private storage: Storage) {
    this.myForm = this.createMyForm();
   }
  
   private createMyForm(){
    return this.myForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  async ngOnInit() {
    this.utils.clear();
    console.log("this.storage.create()");
    await this.storage.create();
  }

  async login(){
    if(this.myForm.valid) {  

      // verificar si hay red
      //if(this.Toast.checkNetwork()) {

        const loading = this.loadingCtrl.create();

        loading.then((e) =>{
          e.present();

        this.apiService.getLogin(this.myForm.value, '/login').then(async (resp:any) => {
          
          console.log(resp[0]);
          //var respuesta = JSON.parse(resp);
          //console.log(respuesta);

          if(resp){
            if(resp.error){
              console.log("No esta autorizado");
              //this.Toast.create("No esta autorizado");
            }
            else {
              
              await this.utils.saveLogin(resp[0].id, resp[0].apellidos + " " + resp[0].nombres, resp[0].rol_app);
              this.utils.publishAuth({ user:"login" });

              this.router.navigate(["/home"]);
            }
          }
          else {
            console.log("credenciales incorrectas");
            alert("credenciales incorrectas");
          }

          e.dismiss();

        }).catch( error => {
          e.dismiss();
          console.error( error );
          alert( "error: " + JSON.stringify(error));
        });

      });
    }
  }

}
