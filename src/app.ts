import { Invoice } from "./classes/invoice.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: "dan",
  age: 30,
  speak(text: string) {
    console.log(text);
  },
  spend(amount: number) {
    console.log(amount);
    return amount;
  },
};

const greetPerson = (person: IsPerson) => {
  console.log("person", person.name);
};

const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});

const i1 = new Invoice("mario", "work on my website", 250);
const i2 = new Invoice("luigi", "work in my car", 120);

let invoices: Invoice[] = [i1, i2];

invoices.forEach((e) => {
  console.log(e.amount, e.client, e.format());
});

greetPerson(me);
