import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {HTTP_PROVIDERS} from '@angular/http';

import {DashboardComponent} from './dashboard.component';
import {ArticleService} from './article.service';
import {ArticleEditorComponent} from './article-editor.component';
import {ArticlesListComponent} from './articles-list.component';

@Component({
  selector: 'my-app',
  template: `
    <aside>
      <div class="logo no-space">Mimi Bloom</div>
      <ul>
        <li><a [routerLink]="['Dashboard']">Dashboard</a></li>
        <li><a [routerLink]="['Write']">Write</a></li>
        <li><a [routerLink]="['ArticlesList']">View articles</a></li>
      </ul>
    </aside>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS, ArticleService]
})

@RouteConfig([
  {path: '/', name: 'Dashboard', component: DashboardComponent},
  {path: '/write', name: 'Write', component: ArticleEditorComponent},
  {path: '/edit/:id', name: 'Edit', component: ArticleEditorComponent},
  {path: '/articles', name: 'ArticlesList', component: ArticlesListComponent}
])

export class AppComponent {

}
