import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Http, Response } from "@angular/http";
import { EmailBlackList } from "../models/email-black-list";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class EmailBlacklistService {
  constructor(private http: Http) {}

  private url = "http://localhost:2403/email-black-list";

  getEmailBlackList(): Observable<EmailBlackList[]> {
    let emailBlackList = this.http
      .get(this.url)
      .pipe(map(this.extractEmailList));
    return emailBlackList;
  }

  private extractEmailList(response: Response): EmailBlackList[] {
    let res = response.json();
    let emailBlackList: EmailBlackList[] = [];
    for (let i = 0; i < res.length; i++) {
      emailBlackList.push(new EmailBlackList(res[i].id, res[i].email));
    }
    return emailBlackList;
  }
}
