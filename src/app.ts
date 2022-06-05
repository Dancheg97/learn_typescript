import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payments.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

let stuff: HasFormatter[] = [];

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
  if (type.value === "payment") {
    stuff.push(new Invoice(tofrom.value, details.value, amount.valueAsNumber));
  } else {
    stuff.push(new Payment(tofrom.value, details.value, amount.valueAsNumber));
  }
  console.log(stuff);
});

stuff.forEach((e) => {
  console.log("ss", e.format());
});
