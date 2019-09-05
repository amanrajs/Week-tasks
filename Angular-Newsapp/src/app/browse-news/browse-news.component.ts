import { AppConstants } from './../constants';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsApiService } from '../news-api.service';
import { IArticle } from '../Articles';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-browse-news',
  templateUrl: './browse-news.component.html',
  styleUrls: ['./browse-news.component.scss']
})
export class BrowseNewsComponent implements OnInit {
  articlesSource = [AppConstants.all_channel];
  public selectedLevel = AppConstants.all_channel;
  public articles; temp_articles = [];
  article_data: any;
  public btnText:String='Filter';
  flagFilter = false;
  subscription: Subscription;
  constructor(private router: Router, private newsapi: NewsApiService) {
  }
  ngOnInit() {
    this.newsapi.getArticles().subscribe(
      (data) => {
        this.articles = data;
        if (this.newsapi.tempData)
          this.articles.push(this.newsapi.tempData);
        for (let item in data) {
          if (this.articlesSource.indexOf(data[item].postCategory) !== -1) {
            continue;
          } else {
            this.articlesSource.push(data[item].postCategory);
          }
        }
      }
    );
    this.subscription = this.newsapi.article.subscribe(
      (article_data) => {
        this.article_data = article_data;
        const Data = {} as IArticle;
        Data.postTitle = article_data.newsHeading;
        Data.postDate = article_data.date;
        Data.postCategory = article_data.author;
        Data.imageSrc = AppConstants.imgPath
        Data.postDesc = article_data.newsContent;
        Data.postId = '1000';
        this.newsapi.tempData = Data;
      }
    );
  }
  addArticle() {
    this.router.navigateByUrl('/create');
  }
  filterArticles(filter) {
    if (!this.flagFilter) {
      this.temp_articles = this.articles;
      this.btnText= 'Clear Filter';
      document.getElementById('btnFilter').style.color = 'red';
      this.flagFilter = true;
      const Data = [];
      let item = {} as any;
      for (item of this.articles) {
        if (item.postDesc.indexOf(filter) !== -1) {
          Data.push(item)
        }
      }
      this.articles = Data;
    }
    else {
      document.getElementById('btnFilter').innerText = 'Filter';
      document.getElementById('btnFilter').style.color = 'black';
      this.flagFilter = false;
      this.articles = this.temp_articles;
    }
  }

  fullNews(news: IArticle) {
    this.router.navigate(['/Articles', news.postId]);
  }
}
