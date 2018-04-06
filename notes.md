# Angular notes

* `component.html` is where all the HTML goes for the page
  ```html
  // we use {{}} to access params form components.ts
  <div style="text-align:center">
    <h1> Yo, {{ title }}! </h1> // linked to components.ts
    <input type="text" [(ngModel)]="name"> // still learning this [(ngModel)]
    <p>{{name}}</p>
  </div>
  ```
* `component.ts`is the setup to render the page

* `export class name {}` we can set up paramaters here to be used in the HTML.

  ```javascript
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent {
    title = 'Hello Ely!';
    name = '';
  }
  ```
