import { LogginService } from "./logging.service";
import { Injectable, EventEmitter } from "@angular/core";

// tells service we can be injected other services
@Injectable()
export class AccountsService {
  accounts = [
    {
      name: "Master Account",
      status: "active"
    },
    {
      name: "Testaccount",
      status: "inactive"
    },
    {
      name: "Hidden Account",
      status: "unknown"
    }
  ];

  statusUpdatedEvent = new EventEmitter<string>();

  constructor(private loggingService: LogginService) {}

  addAccount(name: string, status: string) {
    this.accounts.push({ name, status });
    this.loggingService.logStatusChange(status);
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.loggingService.logStatusChange(status);
  }
}
