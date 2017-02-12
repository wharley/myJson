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

  items:any;


  constructor(public navCtrl: NavController, public service: HomeService) { }

  login() {
    this.service.getFunctions(this.user)
                .subscribe(
                    datas => {
                          if(datas)
                            this.items = datas.dados
                              //console.log(datas.dados)
                              //this.view.dismiss(this.data)
                          else alert("usuario ou senha inválido")
    });

}

}
