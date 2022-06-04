"use strict";
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}
const i1 = new Invoice("mario", "work on mario website", 250);
const i2 = new Invoice("luigi", "work under my car", 120);
let invoices = [i1, i2];
invoices.forEach((e) => {
    console.log(e.amount, e.client);
});
