import { LoginServiceService } from './../login-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLogin;
  isAdmin: boolean = false;
  subscription: Subscription;
  adminSubs: Subscription;

  constructor(private api: LoginServiceService, private router: Router) {
    this.isLogin = this.api.isValid;
  }
  Logout() {
    if (this.api.isAdmin) {
      this.api.isAdmin = false;
    } else {
      this.api.isValid = false;
    }
    this.router.navigateByUrl('');
  }
  ngOnInit() {
    this.subscription = this.api.check.subscribe(
      (bool) => {
        this.isLogin = bool;
      }
    );
    this.adminSubs = this.api.checkAdmin.subscribe(
      (bool) => {
        this.isAdmin = bool;
      }
    );

  }
}
