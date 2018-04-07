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
* `component.ts` is the setup to render the page

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

  # `@Component` selector

  It is used to set up our component.

  * `selector`
    * we can set how we want to access our element inside of our html. There are sever different ways to do this.
      * `selector: 'app-root'` --> `<app-root></app-root>`
      * `selector: '[app-root]'` --> `<div app-root><div>`
      * `selector: '.app-root'` --> `<div class="app-root"><div>`

  We need to register the components in `app.modules.ts` so we can use them in our app. We register them in the `declarations` array and we also need to `import { Component_name } from 'path/to/component'`

* To use Bootstrap
  * add `@import '~bootstrap/dist/css/bootstrap.css` to `styles.css` | [source](https://medium.com/codingthesmartway-com-blog/building-an-angular-5-project-with-bootstrap-4-and-firebase-4504ff7717c1)
  * `npm i --save bootstrap@3` and add `""../node_modules/bootstrap/dist/css/bootstrap.min.css""` under `"styles"` in the `angualar-cli.json` file

# Angular-cli

* # Create component
  * easily create components with `ng g c ComponentName` or `ng generate component ComponentName`. First command is best as it also imports the component to `app.module.ts` to make it usable in out app
