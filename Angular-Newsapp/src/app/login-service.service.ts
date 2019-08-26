import { AppConstants } from './constants';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  constructor() { }
  isValid=false;
  public check = new Subject<any>();

  loginCheck(username,password){
    if(username===AppConstants.email && password===AppConstants.password)
    {
      this.check.next(true);
      this.isValid=true;
    };
    return this.isValid;
}
}
