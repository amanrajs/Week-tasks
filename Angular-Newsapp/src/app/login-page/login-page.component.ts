import { AppConstants } from './../constants';
import { LoginServiceService } from './../login-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  email:string;
  password:string;
  constructor(private api: LoginServiceService, private router: Router) { }
  ngOnInit() {
    this.email = AppConstants.email;
    this.password = AppConstants.password;
  }
  tryLogin(username: string, password: string) {
    if (this.api.loginCheck(username, password)) {
      this.router.navigateByUrl('/home');
    }
    else {
      alert(AppConstants.wrongDetails);
    }
  }
}
