import { Invoice } from "./classes/invoice.js";
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
  if (type.value === "Payment") {
    stuff.push(new Invoice(tofrom.value, details.value, amount.valueAsNumber));
  }
});

stuff.forEach((e) => {
  console.log("ss", e.format());
});
