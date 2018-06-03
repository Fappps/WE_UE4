import {Injectable} from '@angular/core';

@Injectable()
export class SessionStorageService {
  private _loggedIn;

  constructor() {
    if(localStorage.getItem('loggedIn')){
      this._loggedIn=localStorage.getItem('loggedIn');
    }else{
      this._loggedIn=false;
    }
  }

  get loggedIn() {
    return this._loggedIn;
  }

  setLoggedIn(loggedIn): void {
    this._loggedIn = loggedIn;
    if (loggedIn) {
      localStorage.setItem('loggedIn', loggedIn);
    } else {
      localStorage.removeItem('loggedIn');
    }
  }
}
