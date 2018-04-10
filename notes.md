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
  import { Component } from "@angular/core";

  @Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
  })
  export class AppComponent {
    title = "Hello Ely!";
    name = "";
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

# Data Binding

* Property Binding

  * `[property] = "value"`

    * we can use this for dynamic data, property is any html prop we can have on the element. The value comes from the class in `*.component.ts`

    ```javascript
      // servers.component.html
      // allowNewServer is bound to the value in the class and is dynamic
      <button class="btn btn-primary" [disabled]="!allowNewServer">Add Server<\/button>

      // servers.component.ts
      export class ServersComponent implements OnInit {
        allowNewServer = false;
        constructor() {
          // changes the value after 2 secs
          setTimeout(() => (this.allowNewServer = true), 2000);
        }

        ngOnInit() {}
      }
    ```

* Event binding

  * is used to wire up our events, like button clicks
  * we use the `(event) = "method"` syntax to signify we are binding an event
  * usually we use method to trigger an action on bound events

    ```javascript
      // server.components.html
      <button class="btn btn-primary"(click)="onCreateServer()">Add Server<\/button>

      //server.components.ts
      export class ServersComponent implements OnInit {
        // will chang the value once button is clicked
        onCreateServer() {
          this.serverCreationStatus = "Server was created!";
        }
      }
    ```

  * Passing data w/events
    * we can use the event emitted to capture data.
    * we access the event by binding an event `(click)="onClick()"` and passing in the event `(click)="onClick($event)`
      * angular uses `$event` as the way to pass the event to the function
      * access event value with `event.target.value` or using ts `(<HTMLInputElement>event.target).value`

* Two way data binding

  * we acheive this with the magical `[(ngModule)]="property"` directive
    * in `app.module.ts`
      * we need to add `import { FormsModule } from '@angular/forms'`
      * don't forget to add it into `imports: [..., FormsModule]`
  * Two way data binding helps us use the input to update the output and vice-versa

* Directives

  * directives are instructions in the DOM
  * still need to learn more about this
  * directives that change the structure of the DOM need to be prefixed with `*`
  * built-in directives

    * `ngIf`
      * need to be accessed with `*ngIf`
      * `*ngIf="stuff-to-render"`
      ```html
          <p *ngIf="serverCreated">
            Server was created, server name is {{serverName}}
          </p>
      ```
    * `ngIf` with IF-ELSE
      * we need to create the other template to render using `<ng-template #noServer></ng-template>` the `#` serves as a ref to the template
      * then we modify the `*ngIf` to use our else `*ngIf="serverCreate; else noServer"`
      ```html
          <p *ngIf="serverCreated; else noServer">
            Server was created, server name is {{serverName}}
          </p>
          <ng-template #noServer>
              <p>No server was created</p>
          </ng-template>
      ```
    * `ngStyle`

      * used to dynamically style content
      * we can call function withing ngStyle as it is part of angular
      * configuration is an object

      ```html
        // regular styles
         <p [ngStyle]="{cssProp: value}"></p>

         // dynamic styles, getValue comes form the ts file
         <p [ngStyle]="{cssProp: getValue()}"></p>
      ```

    * `ngClass`

      * used so we can dynamically add classes
      * similar syntax to `ngStyle`
      * style classes need to be in the css/styles to function

      ```html
        // syntax, if expression returns true class name will be added
        <p [ngClass]="{className: expression }"></p>

        // will add class based on the serverStatus
        <p [ngClass]="{online: serverStatus === 'online', offline: serverStatus === 'offline }"></p>
      ```

    * `ngFor`

      * serves a for/for-of loop
      * define as `let server of servers`
      * `servers` come from our ts file

      ```html
        // will create as many components needed
        // content inside app-server is still static
        // still need to learn how to pass in data
        <app-server *ngFor="let server of servers"></app-server>

        // pass data and get index
        // access data with iterpolation
        <app-server *ngFor="let server of servers; let i = index">{{server}}</app-server>

      ```

* To use Bootstrap
  * add `@import '~bootstrap/dist/css/bootstrap.css` to `styles.css` | [source](https://medium.com/codingthesmartway-com-blog/building-an-angular-5-project-with-bootstrap-4-and-firebase-4504ff7717c1)
  * `npm i --save bootstrap@3` and add `""../node_modules/bootstrap/dist/css/bootstrap.min.css""` under `"styles"` in the `angualar-cli.json` file

# Angular-cli

* # Create component
  * easily create components with `ng g c ComponentName` or `ng generate component ComponentName`. First command is best as it also imports the component to `app.module.ts` to make it usable in out app
