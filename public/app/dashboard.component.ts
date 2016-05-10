import {Component} from '@angular/core';

@Component({
  selector: 'dashboard',
  template: `
    <header>
      <h1>Dashboard</h1>
    </header>
  `,
  styles: [`
    header {
      padding-top: 60px;
      padding-bottom: 20px;
      width: 100%;

      text-align: center;
      border-bottom: 1px solid #ececec;
    }
  `]
})

export class DashboardComponent {

}
