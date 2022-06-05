import { Invoice } from "./classes/invoice.js";
const me = {
    name: "dan",
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log(amount);
        return amount;
    },
};
const greetPerson = (person) => {
    console.log("person", person.name);
};
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
const i1 = new Invoice("mario", "work on my website", 250);
const i2 = new Invoice("luigi", "work in my car", 120);
let invoices = [i1, i2];
invoices.forEach((e) => {
    console.log(e.amount, e.client, e.format());
});
greetPerson(me);
