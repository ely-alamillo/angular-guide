export class LogginService {
  logStatusChange(status: string) {
    console.log(`A Server status changed, new status: ${status}`);
  }
}
