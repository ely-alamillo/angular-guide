import { Component } from "@angular/core";
import { LogginService } from "../logging.service";
import { AccountsService } from "../accounts.service";

@Component({
  selector: "app-new-account",
  templateUrl: "./new-account.component.html",
  styleUrls: ["./new-account.component.css"],
  // for services
  providers: [LogginService]
})
export class NewAccountComponent {
  constructor(
    private loggingService: LogginService,
    private accountService: AccountsService
  ) {
    this.accountService.statusUpdatedEvent.subscribe((status: string) =>
      alert("New Status: " + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    // replace with service
    // console.log('A server status changed, new status: ' + accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
    this.accountService.addAccount(accountName, accountStatus);
  }
}
