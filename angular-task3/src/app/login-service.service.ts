import { AppConstants } from './constants';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  constructor() { }
  isValid = false;
  isAdmin:boolean=false;
  public check = new Subject<any>();
  public checkAdmin = new Subject<any>();
  loginCheck(username, password) {
    if (username === AppConstants.email && password === AppConstants.password) {
      this.check.next(true);
      this.isValid = true;
    };
    return this.isValid;
  }
  adminCheck(username, password){
    if (username === AppConstants.adminEmail && password === AppConstants.adminPassword) {
      this.checkAdmin.next(true);
      this.isAdmin = true;
    };
    return this.isAdmin;

  }
}
