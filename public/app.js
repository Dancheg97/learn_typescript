import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payments.js";
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
let stuff = [];
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
    if (type.value === "payment") {
        stuff.push(new Invoice(tofrom.value, details.value, amount.valueAsNumber));
    }
    else {
        stuff.push(new Payment(tofrom.value, details.value, amount.valueAsNumber));
    }
    console.log(stuff);
});
stuff.forEach((e) => {
    console.log("ss", e.format());
});
