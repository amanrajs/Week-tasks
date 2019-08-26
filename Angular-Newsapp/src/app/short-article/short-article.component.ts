import { Component, OnInit, Input } from '@angular/core';
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
  public newsHeading: string;
  newsContent: string;
  date: Date;
  newsContentModal: string = "";
  newsHeadingModal: string = "";
  dateModal: Date;
  btnId:string;
  displayData: any;
  constructor(private router: Router, private ref: ChangeDetectorRef) {
  }
  ngOnInit() {
    this.newsHeading = this.news.postTitle;
    this.newsContent = this.news.postDesc;
    this.date = this.news.postDate;
    this.btnId = this.news.postId + 'btn';
  }
  readMore(newNews) {
    this.newsHeadingModal = newNews.postTitle;
    this.newsContentModal = newNews.postDesc;
    this.dateModal = newNews.postDate;
    var modal = document.getElementById(newNews.postId);
    let btnid = newNews.postId + 'btn';
    modal.style.display = 'block';
    var btn = document.getElementById(btnid);
    this.ref.markForCheck();

    btn.onclick = function () {
      modal.style.display = 'none';
    }
  }
}
