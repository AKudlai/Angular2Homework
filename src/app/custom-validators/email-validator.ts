import { FormControl } from "@angular/forms";

export function emailValidator(control: FormControl) {
  let emailRegEx: RegExp = /[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/i;
  let value = control.value;

  let result: boolean = emailRegEx.test(value);

  if (result) {
    return null;
  } else {
    return {
      emailValidator: {
        valid: false
      }
    };
  }
}
