import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";

@Injectable()
export class BsService {
  constructor(private http: HttpClient) {}

  getBsCurrentPrice() {
    return this.http.get("/assets/shipping.json");
  }

  getBsListViaConfig() {
    return this.http.get("/assets/bsConfig.json");
  }
}
