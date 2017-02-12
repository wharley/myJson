import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { HomePage } from './home';

@Injectable()
export class HomeService {

  constructor(public http: Http) {

  };

  getFunctions(user) {
    let urlDest = "http://otaciobarbosa.com.br/private/mobile/wav/server/login.php?username=" + user.username + "&password=" + user.password;
   //robson.santos
  //  robson123
    return this.http.get(urlDest)
              .map( (res:Response) => res.json());
  }

}
