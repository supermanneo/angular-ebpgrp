import { Component, OnInit } from "@angular/core";
import { BsService } from "../bs.service";

@Component({
  selector: "app-bs-page",
  templateUrl: "./bs-page.component.html",
  styleUrls: ["./bs-page.component.css"]
})
export class BsPageComponent implements OnInit {
  constructor(private bsService: BsService) {}

  ngOnInit() {}
}
