import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IArticle } from './Articles';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  private _url = "/assets/data/newsArticles.json";
  public article = new Subject<any>();
  tempData: any;
  constructor(private http: HttpClient) { }
  getArticles(): Observable<IArticle[]> {
    return this.http.get<IArticle[]>('http://localhost:4200/assets/data/newsArticles.json');
  }
  updateArticles(article) {
    this.article.next(article);
  }
} 
