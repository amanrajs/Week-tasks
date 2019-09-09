import { LoginServiceService } from './login-service.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private api: LoginServiceService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.api.isValid||this.api.isAdmin) {
      return true;
    } else {
      this.router.navigate([''], {
        queryParams: {
          return: state.url
        }
      });
      return false;
    }
  }


}
