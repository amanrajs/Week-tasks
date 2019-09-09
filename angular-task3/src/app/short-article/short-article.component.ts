import { CommentsService } from './../comments.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { IArticle } from '../Articles';
import { ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-short-article',
  templateUrl: './short-article.component.html',
  styleUrls: ['./short-article.component.scss']
})
export class ShortArticleComponent implements OnInit {
  @Input() public news;
  @Output() public newsData = new EventEmitter<IArticle>();
  subscription: Subscription;
  public newsHeading: string;
  newsContent: string;
  date: Date;
  btnId: string;
  comments: number = 0;
  constructor(private router: Router, private ref: ChangeDetectorRef, private comm: CommentsService) {
  }
  ngOnInit() {
    this.newsHeading = this.news.postTitle;
    this.newsContent = this.news.postDesc;
    this.date = this.news.postDate;
    this.btnId = this.news.postId + 'btn';
    console.log(this.comments);
    this.comments = this.comm.comments.get(parseInt(this.news.postId)).length;
  }
  readMore(newNews) {
    this.newsData.emit(newNews);
  }
}
