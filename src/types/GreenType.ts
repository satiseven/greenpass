export interface GreenType {
  passportNum: number;
  passportValidation: (passnum: number) => void;
}
