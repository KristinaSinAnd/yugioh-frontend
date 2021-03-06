import { Injectable } from '@angular/core';
import {SecureHttpClientService} from './secure-http-client.service';
import {User} from '../users/entities/user';
import {Observable} from 'rxjs';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  constructor(
    private secureHttpClientService: SecureHttpClientService,
  ) { }

  getUserInfo(): Observable<User>{
    return this.secureHttpClientService.get(environment.apiUrl + '/userinfo');
  }
}
