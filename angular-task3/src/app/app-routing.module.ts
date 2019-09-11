import { CommentsComponent } from './comments/comments.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FullArticleComponent } from './full-article/full-article.component';
import { BrowseNewsComponent } from './browse-news/browse-news.component';
import { CreateNewsComponent } from './create-news/create-news.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'home', component: BrowseNewsComponent, canActivate: [AuthGuardService] },
  { path: 'create', component: CreateNewsComponent, canActivate: [AuthGuardService] },
  { path: 'Articles/:id', component: FullArticleComponent, canActivate: [AuthGuardService] },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CreateNewsComponent, PageNotFoundComponent, FullArticleComponent, LoginPageComponent, CommentsComponent];