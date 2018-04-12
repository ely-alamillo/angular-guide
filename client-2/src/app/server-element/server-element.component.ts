import { Component, OnInit, Input, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"]
  // encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit {
  // is @Input for custom prop binding, lets us access info
  @Input() element: { type: string; name: string; content: string };

  // using an alias
  // @Input("srvElement") element: { type: string; name: string; content: string };

  constructor() {}

  ngOnInit() {}
}
