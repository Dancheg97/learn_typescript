import { ListTemplate } from "./classes/has_tmplt.js";
import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payments.js";
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "payment") {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, "Invoice", "end");
});
