import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { IArticle } from '../Articles';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-short-article',
  templateUrl: './short-article.component.html',
  styleUrls: ['./short-article.component.scss']
})
export class ShortArticleComponent implements OnInit {
  @Input() public news;
  @Output() public newsData = new EventEmitter<IArticle>();;
  public newsHeading: string;
  newsContent: string;
  date: Date;
  btnId: string;
  constructor(private router: Router, private ref: ChangeDetectorRef) {
  }
  ngOnInit() {
    this.newsHeading = this.news.postTitle;
    this.newsContent = this.news.postDesc;
    this.date = this.news.postDate;
    this.btnId = this.news.postId + 'btn';
  }
  readMore(newNews) {
    this.newsData.emit(newNews);
  }
}
