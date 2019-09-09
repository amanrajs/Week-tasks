import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsApiService } from '../news-api.service';
import { IArticle } from '../Articles';

@Component({
  selector: 'app-full-article',
  templateUrl: './full-article.component.html',
  styleUrls: ['./full-article.component.scss']
})
export class FullArticleComponent implements OnInit {
  public fullnews: IArticle;
  public heading; content; date; postId;
  constructor(private route: ActivatedRoute, private news: NewsApiService, private router: Router) {
  }
  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.news.getArticles().subscribe(
      (data) => {
        let item: any;
        for (item of data) {
          if (item.postId == id) {
            this.fullnews = item;
            this.heading = item.postTitle;
            this.content = item.postDesc;
            this.date = item.postDate;
            this.postId = item.postId;
          }
        }
      }
    );
  }
  btnClose() {
    this.router.navigateByUrl('home');
  }
}
