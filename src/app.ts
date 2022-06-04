const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});

class Invoice {
  readonly client: string;
  private details: string;
  public amount: number;
  constructor(client: string, details: string, amount: number) {
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

let invoices: Invoice[] = [i1, i2];

invoices.forEach((e) => {
  console.log(e.amount, e.client);
});
