import { Component, Input } from "@angular/core";
import { LogginService } from "../logging.service";
import { AccountsService } from "../accounts.service";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.css"]
  // providers: [LogginService]
})
export class AccountComponent {
  @Input() account: { name: string; status: string };
  @Input() id: number;

  constructor(
    private loggingService: LogginService,
    private accountService: AccountsService
  ) {}

  onSetTo(status: string) {
    // console.log("A server status changed, new status: " + status);
    // this.loggingService.logStatusChange(status);
    this.accountService.updateStatus(this.id, status);
  }
}
