import { CommentsService } from './../comments.service';
import { LoginServiceService } from './../login-service.service';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit, OnChanges {
  @Input() newsPostId;
  comments = [];
  comment = '';
  author: string;
  constructor(private login: LoginServiceService, private comm: CommentsService) { }
  ngOnInit() {
    if (this.login.isAdmin)
      this.author = 'admin';
    else {
      this.author = 'AMAN';
    }
  }
  ngOnChanges() {

    if (this.newsPostId) {
      this.comments = this.comm.comments.get(parseInt(this.newsPostId));
    }
  }

  Comment(comment: string) {
    this.comments.push(comment);
    this.comm.comments.set(parseInt(this.newsPostId), this.comments);
    this.comm.broadcastChange();
    this.comment = '';
  }
}
