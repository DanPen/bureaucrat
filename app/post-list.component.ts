import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'post-list',
  template: `
    <ul>
      <li *ngFor="let article of articles">
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
    }

    li span {
      margin-left: 20px;
      color: #888;
    }
  `]
})

export class PostListComponent implements OnInit {

  articles: Array = [
    new Article('A story that will warm your heart', 'there'),
    new Article('Bla bla bla', 'there'),
    new Article('Adventures in Antarctica', 'there'),
  ];

  ngOnInit() {

  }

}

class Article {

  constructor(public title: string, public content: string) {

  }

}
