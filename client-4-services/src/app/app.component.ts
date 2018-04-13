import { Component, OnInit } from "@angular/core";
import { AccountsService } from "./accounts.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  // use service
})
export class AppComponent implements OnInit {
  accounts: { name: string; status: string }[] = [];

  // add service
  constructor(private accountService: AccountsService) {}

  ngOnInit() {
    this.accounts = this.accountService.accounts;
  }
}
