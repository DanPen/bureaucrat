import {Component, OnInit} from '@angular/core';
import {Control} from '@angular/common';
import {Router, RouteParams} from '@angular/router-deprecated';
import {Observable} from 'rxjs/Observable';

import {ArticleService} from './article.service';
import {Article} from './article';

@Component({
  selector: 'post-new',
  template: `
    {{ errorMessage }}
    <div *ngIf="article">
      <section id="top">
        <input [(ngFormControl)]="title" placeholder="title">
        <div id="toolbar">
          <button>Image</button>
        </div>
        <div id="right">
          <button *ngIf="!article.publishDate">Publish</button>
          <span *ngIf="article.publishDate">published on {{ article.publishDate | date}} </span>
        </div>
      </section>
      <section id="flex">
        <textarea [(ngFormControl)]="content"></textarea>
        <div id="render">
          <h1 *ngIf="article.title">{{article.title}}</h1>
          {{article.content}}
          <h2 *ngIf="!article.title && !article.content">Rendered content will be shown here. Just start typing over there 👈🏻</h2>
        </div>
      </section>
    </div>
  `,
  styles: [`
    #top {
      width: 100%;
      padding: 20px;

      border-bottom: 1px solid #ececec;
    }

    #top input {
      font-size: 20px;
      padding: 10px;

      border: 1px solid #ececec;
      outline: none;
    }

    #top #toolbar {
      margin-top: 20px;
    }

    #right {
      position: absolute;
      top: 20px;              /* because absolute pos doesn't give you padding */
      right: 20px;
    }

    #flex {
      display: flex;
      height: calc(100vh);
      width: 100%;
    }

    #flex textarea {
      width: 100%;
      height: 100%;
      padding: 50px;
      font-family: Courier;
      font-size: medium;

      border: none;
      outline: none;
      border-right: 1px solid #ececec;
    }

    #flex #render {
      width: 100%;
      height: 100%;

      padding: 50px;
    }
  `]
})

export class ArticleEditorComponent implements OnInit {
  article: Article;
  title = new Control();
  content = new Control();

  errorMessage;

  constructor(private routeParams: RouteParams,
              private router: Router,
              private articleService: ArticleService) {}

  ngOnInit() {
    let id = this.routeParams.get('id');
    if (!id) {
      this.articleService.createArticle()
        .subscribe(
          article => {this.article = article; console.log(article)},
          error => this.errorMessage = <any>error
        );
    }
    else {
      this.getArticle(+id);
    }

    Observable.merge(
      this.title.valueChanges,
      this.content.valueChanges).
    debounceTime(500).
    subscribe(
      (message) => console.log(message)
    );

  }

  ngOnDestroy() {
  }

  getArticle(id: number) {
    this.articleService.getArticle(id)
      .subscribe(
        article => {this.article = article; console.log(article)},
        error => this.errorMessage = <any>error
      )
  }

  save() {
    this.articleService.updateArticle(this.article)
      .subscribe(
        response => {console.log(response)},
        error => this.errorMessage = error
      )
  }

  publish(publish: boolean) {
    this.articleService.publishArticle(this.article, publish)
      .subscribe(
        publishDate => this.article.publishDate = publishDate,
        error => this.errorMessage = error
      )
  }

}
