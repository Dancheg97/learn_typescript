import { Invoice } from "./classes/invoice.js";
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
let stuff = [];
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
    if (type.value === "Payment") {
        stuff.push(new Invoice(tofrom.value, details.value, amount.valueAsNumber));
    }
});
stuff.forEach((e) => {
    console.log("ss", e.format());
});
