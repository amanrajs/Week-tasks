import { CommentsService } from './../comments.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NewsApiService } from '../news-api.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.scss']
})
export class CreateNewsComponent implements OnInit {
  createNewsForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private news: NewsApiService, private comm: CommentsService) { }
  ngOnInit() {
    this.createNewsForm = this.fb.group({
      newsHeading: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(3)]],
      newsContent: ['', [Validators.required, Validators.minLength(10)]],
      date: ['', [Validators.required]],
      author: [''],
      newsUrl: [''],
    });
  }
  onSubmit() {
    this.news.updateArticles(this.createNewsForm.value);
    this.comm.updateMap(this.news.postId);
    this.router.navigateByUrl('home');
  }
  resetForm() {
    this.router.navigateByUrl('home');
  }
  get newsHeading() {
    return this.createNewsForm.get('newsHeading');
  }

  get description() {
    return this.createNewsForm.get('description');
  }

  get newsContent() {
    return this.createNewsForm.get('newsContent');
  }
  get date() {
    return this.createNewsForm.get('date');
  }
}
