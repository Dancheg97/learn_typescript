import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payments.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

const template = document.querySelector("ul");

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
  if (type.value === "payment") {
    var invoice = new Invoice(
      tofrom.value,
      details.value,
      amount.valueAsNumber
    );
  } else {
    var payment = new Payment(
      tofrom.value,
      details.value,
      amount.valueAsNumber
    ); 
  }
});
