﻿import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {AuthenticationClient} from '../rest';
import {SessionStorageService} from './session-storage.service';

@Injectable()
export class AuthenticationService {
  constructor(private readonly restClient: AuthenticationClient, private readonly sessionStorageService: SessionStorageService) {
  }

  get isLoggedIn(): boolean {
    return this.sessionStorageService.loggedIn;
  }

  login(username: string, password: string): Observable<void> {
    return this.restClient.authenticate({
      username: username, password: password
    }).map((res) => {
      console.log(res);
      this.sessionStorageService.setLoggedIn(res['token']);
    });
  }

  logout(): void {
    this.sessionStorageService.setLoggedIn(false);
  }
}
