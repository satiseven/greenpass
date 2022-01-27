import { GreenType } from "./types/GreenType";

class greenClass implements GreenType {
  passportNum: number;
  constructor() {
    this.passportNum = 12;
  }
  passportValidation(passnum: number): void {
    console.log(passnum);
  }
}
let mixMe = new greenClass();
mixMe.passportValidation(15 * 24);
