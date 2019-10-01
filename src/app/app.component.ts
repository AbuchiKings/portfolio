import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <nav-bar></nav-bar>
  <router-outlet></router-outlet>
  <ft></ft>
  `,
})
export class AppComponent {
  title = 'portfolio';


}
