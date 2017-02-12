import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomeService } from './home.service';

export class User {
  username: string;
  password: string;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    HomeService
  ]
})
export class HomePage {

  user: User = {
    username: '',
    password: ''
  }

  constructor(public navCtrl: NavController, public service: HomeService) { }

  login() {
    
    this.service.getFunctions(this.user)
                .subscribe(
                    datas => {
                          if(datas)
                              console.log(datas)
                              //this.view.dismiss(this.data)
                          else alert("usuario ou senha inválido")
    });

}

}
