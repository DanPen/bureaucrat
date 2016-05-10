import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router-deprecated';

import {ArticleService} from './article.service';
import {Article} from './article';

@Component({
  selector: 'post-list',
  template: `
    <ul>
      <li *ngFor="let article of articles" (click)="goToEdit(article)">
        <h3>{{ article.title }}</h3>
        <span>{{ article.content }}</span>
      </li>
    </ul>
  `,
  styles: [`
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }

    li {
      padding: 30px;
      border-bottom: 1px solid #ececec;
      cursor: pointer;
    }

    li span {
      margin-left: 20px;
      color: #888;
    }
  `]
})

export class ArticlesListComponent implements OnInit {

  articles: Article[];

  constructor(private router: Router,
              private articleService: ArticleService) {}

  ngOnInit() {
    this.getArticles();
  }

  getArticles() {
    this.articleService.getArticles()
            .subscribe(
              articles => this.articles = articles
            );
  }

  goToEdit(article: Article) {
    let link = ['Edit', {id: article.id}];
    this.router.navigate(link);

  }

}
