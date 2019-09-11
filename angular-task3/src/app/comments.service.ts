import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { NewsApiService } from './news-api.service';
@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  comments: Map<number, string[]> = new Map<number, string[]>();
  public check = new Subject<any>();

  constructor(private news: NewsApiService) {
    let list = [];
    for (let i = 0; i < 15; i++) {
      this.comments.set(i, list);
      list = [];
    }
  }
  updateMap(id) {
    let list = [];
    this.comments.set(id, list);
    this.news.postId++;
  }
  broadcastChange() {
    this.check.next(this.comments);
  }
}
