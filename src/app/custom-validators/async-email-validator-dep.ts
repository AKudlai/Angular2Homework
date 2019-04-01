import { EmailBlacklistService } from "./services/email-blacklist.service";
import { FormControl } from "@angular/forms";
import { EmailBlackList } from "./models/email-black-list";

export class AsyncEmailValidatorDep {
  constructor(private emailBlackListService: EmailBlacklistService) {}

  public asyncEmailValidatorDep(control: FormControl) {}

  private emailBlackList: EmailBlackList[];

  private checkEmail(email: string): boolean {
    this.emailBlackListService
      .getEmailBlackList()
      .subscribe(email => (this.emailBlackList = email));
    let isBlocked: boolean =
      this.emailBlackList.find(x => x.email == email) != undefined;
    return isBlocked;
  }
}
