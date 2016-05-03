import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {DashboardComponent} from './dashboard.component';
import {PostNewComponent} from './post-new.component';
import {PostListComponent} from './post-list.component';

@Component({
  selector: 'my-app',
  template: `
    <aside>
      <div class="logo no-space">Mimi Bloom</div>
      <ul>
        <li><a [routerLink]="['Dashboard']">Dashboard</a></li>
        <li><a [routerLink]="['PostNew']">Write article</a></li>
        <li><a [routerLink]="['PostList']">View articles</a></li>
      </ul>
    </aside>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})

@RouteConfig([
  {path: '/', name: 'Dashboard', component: DashboardComponent},
  {path: '/write', name: 'PostNew', component: PostNewComponent},
  {path: '/articles', name: 'PostList', component: PostListComponent}
])

export class AppComponent {

}
