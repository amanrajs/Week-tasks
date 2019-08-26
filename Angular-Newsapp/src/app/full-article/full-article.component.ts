import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsApiService } from '../news-api.service';

@Component({
  selector: 'app-full-article',
  templateUrl: './full-article.component.html',
  styleUrls: ['./full-article.component.scss']
})
export class FullArticleComponent implements OnInit {
  constructor(private route: ActivatedRoute, private news: NewsApiService) {
  }
  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.news.getArticles();
  }
}
