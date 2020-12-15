import { AppConstants } from './constants';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IArticle } from './Articles';
import { Observable, Subject, Observer } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  private _url = "/assets/data/newsArticles.json";
  public article = new Subject<any>();
  public url = AppConstants.dataUrl;
  tempData: any;
  
  constructor(private http: HttpClient) {
    
   }
  getArticles(): Observable<IArticle[]> {
    return this.http.get<IArticle[]>(this.url);
  }
  updateArticles(article) {
    this.article.next(article);
  }
} 
