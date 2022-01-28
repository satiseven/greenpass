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

abstract class Person {
  name: string;
  constructor(name: string) {
    console.log("new Con");

    this.name = name;
  }
  display(): void {
    console.log(this.name);
  }
  abstract find(name: string): Person;
}
class Employee extends Person {
  empCode: number;
  constructor(name: string, code: number) {
    super(name);
    this.empCode = code;
  }
  find(name: string): Person {
    return new Employee(name, 1);
  }
}
class Circle {
  static pi: number = 3.14;

  static calculateArea(radius: number) {
    return this.pi * radius * radius;
  }
}
Circle.pi = 100; // returns 3.14
console.log(Circle.calculateArea(5));
let mine: string[] = ["m", "g", "q", "f", "s"];

class Rectangle {
  private _age: number;
  private _firstname: string;
  constructor() {
    this._age = 0;
    this._firstname = "main";
  }
  public get age() {
    return this._age;
  }
  public set age(num: number) {
    this._age = num;
  }
}
function genericsFunc<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}
let rec = new Rectangle();
let ser = genericsFunc<number>([1, 5]);

console.log(genericsFunc<string>(["main", "second"]));
