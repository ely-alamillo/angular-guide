import { Component } from "@angular/core";

// decorator to give our class
// what it needs
@Component({
  // html class we will access
  selector: "app-server",
  // points to the file
  templateUrl: "./server.component.html",
  styleUrls: ["./styles.css"]
})
// the class we will need
export class ServerComponent {
  serverId = 10;
  serverStatus = "offline";

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? "online" : "offline";
  }
  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === "online" ? "green" : "red";
  }
}
