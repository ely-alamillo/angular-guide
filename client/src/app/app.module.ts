import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
// so we can use [(ngModule)] on forms
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ServerComponent } from "./server/server.component";
import { ServersComponent } from "./servers/servers.component";

@NgModule({
  // this is where we register our components
  declarations: [AppComponent, ServerComponent, ServersComponent],
  // allows us to use other modules, works when we split modules
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
