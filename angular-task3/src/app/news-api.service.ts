import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IArticle } from './Articles';
import { Observable, Subject } from 'rxjs';
import { AppConstants } from './constants';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  private _url = "/assets/data/newsArticles.json";
  public url = AppConstants.dataUrl;

  public article = new Subject<any>();
  tempData: any;
  constructor(private http: HttpClient) { }
  getArticles(): Observable<IArticle[]> {
    return this.http.get<IArticle[]>(this.url);
  }
  updateArticles(article) {
    this.article.next(article);
  }
} 
