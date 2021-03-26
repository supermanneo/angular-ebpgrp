import { Component, OnInit } from "@angular/core";
import { BsService } from "../bs.service";
import { MatCardModule } from "@angular/material/card";

@Component({
  selector: "app-bs-page",
  templateUrl: "./bs-page.component.html",
  styleUrls: ["./bs-page.component.css"]
})
export class BsPageComponent implements OnInit {
  bsList;
  constructor(private bsService: BsService) {}

  ngOnInit() {
    this.bsList = this.bsService.getBsListViaConfig();
    console.log(this.bsList);
  }

  getPrice() {
    return 10.0;
  }
}
