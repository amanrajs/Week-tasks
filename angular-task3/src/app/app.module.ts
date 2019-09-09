import { CommentsService } from './comments.service';
import { AuthGuardService } from './auth-guard.service';
import { LoginServiceService } from './login-service.service';
import { AppRoutingModule ,routingComponents} from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NewsApiService } from './news-api.service';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ShortArticleComponent } from './short-article/short-article.component';
import { BrowseNewsComponent } from './browse-news/browse-news.component';
import { FullArticleComponent } from './full-article/full-article.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CommentsComponent } from './comments/comments.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingComponents,
    ShortArticleComponent,
    BrowseNewsComponent,
    FullArticleComponent,
    LoginPageComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [NewsApiService,LoginServiceService,AuthGuardService,CommentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
