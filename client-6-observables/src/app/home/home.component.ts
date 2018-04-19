import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable } from "rxjs/Observable";
// tslint:disable-next-line
import "rxjs/Rx";
import { Observer } from "rxjs/Observer";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit, OnDestroy {
  numbersSub: Subscription;
  customSub: Subscription;

  constructor() {}

  ngOnInit() {
    const myNumbers = Observable.interval(1000);
    this.numbersSub = myNumbers.subscribe((number: number) => {
      console.log(number);
    });

    // creating my own observable from scratch
    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        // emits the next data package
        observer.next("first package");
      }, 2000);
      setTimeout(() => {
        // emits the next data package
        observer.next("second package");
      }, 4000);
      setTimeout(() => {
        // emits error
        // observer.error("This does not work!");

        // completes the observable
        observer.complete();
      }, 5000);
      setTimeout(() => {
        // never arrives, observable is completed already
        observer.next("third package");
      }, 6000);
    });
    this.customSub = myObservable.subscribe(
      (data: string) => console.log(data),
      (error: string) => console.log(error),
      () => console.log("completed")
    );
  }

  ngOnDestroy() {
    this.numbersSub.unsubscribe();
    this.customSub.unsubscribe();
  }
}
