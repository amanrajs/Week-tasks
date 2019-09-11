import { MessageComponent } from './../message/message.component';
import { AppConstants } from './../constants';
import { LoginServiceService } from './../login-service.service';
import { Component, OnInit, ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  email: string;
  password: string;
  componentRef: any;
  @ViewChild('loadComponent', { read: ViewContainerRef, static: false }) entry: ViewContainerRef;
  constructor(private api: LoginServiceService, private router: Router, private resolver: ComponentFactoryResolver) { }
  ngOnInit() {
    this.email = AppConstants.email;
    this.password = AppConstants.password;
  }
  tryLogin(username: string, password: string) {
    if (this.api.adminCheck(username, password)) {
      this.router.navigateByUrl('/home');
    }
    else if (this.api.loginCheck(username, password)) {
      this.router.navigateByUrl('/home');
    }
    else {
      this.createComponent();
    }
  }
  createComponent() {
    const factory = this.resolver.resolveComponentFactory(MessageComponent);
    this.componentRef = this.entry.createComponent(factory);
    this.componentRef.instance.message = "Called by appComponent";
  }
}
