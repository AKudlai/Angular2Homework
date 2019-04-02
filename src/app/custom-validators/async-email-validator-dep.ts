import { EmailBlacklistService } from "./services/email-blacklist.service";
import { FormControl } from "@angular/forms";
import { EmailBlackList } from "./models/email-black-list";

export function asyncEmailValidatorDep(emailBlackListService: EmailBlacklistService) {
  let emailBlackList: EmailBlackList[];
  let control: FormControl;
  emailBlackListService
    .getEmailBlackList()
    .subscribe(email => (emailBlackList = email));
  let isBlocked: boolean =
    emailBlackList.find(x => x.email == control.value) != undefined;
  if (isBlocked) {
    return {
      asyncEmailValidatorDep: {
        blocked: true
      }
    };
  } else {
    return null;
  }
}
