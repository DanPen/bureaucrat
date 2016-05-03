import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'post-new',
  template: `
    <section id="top">
      <input [(ngModel)]="title" placeholder="title">
      <div id="toolbar">
        <button>Image</button>
      </div>
    </section>
    <section id="flex">
      <textarea [(ngModel)]="content"></textarea>
      <div id="render">
        <h1 *ngIf="title">{{title}}</h1>
        {{content}}
        <h2 *ngIf="!title && !content">Rendered content will be shown here. Just start typing over there 👈🏻</h2>
      </div>
    </section>
    {{title}}
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

export class PostNewComponent implements OnInit {
  title: string;
  content: string;

  ngOnInit() {

  }

}
