import { Component } from '@angular/core';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  username: any;
  constructor(public utils: UtilsService) {
    
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  async ngOnInit(){
    
  }

  ionViewWillEnter(){
    console.log("HomePage");
    //this.utils.getLogin();
    //this.username = this.utils.userData;
  }

}
