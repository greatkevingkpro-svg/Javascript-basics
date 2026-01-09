let input = 20;

if (input === undefined) {
  // console.error("the user did not provide any input");
}

if (input == 0) {
  // console.warn("the user have provided an input of zero");
}

if (input > 100000) {
  // console.info("the user have provided a very large number");
}

const calculation = 500 / input;

// console.log(calculation);

let tonnage = 900;

// console.assert(
//   tonnage > 1000,
//   "the tonnage is low than required 1000 kg"
// )

let sales = [
  {
    id: 123,
    amountDue: 56000,
    purchasedate: new Date("2026-1-6"),
    isCreditSale: false,
    paymentMethod: {
      paymentNum: 209888,
      paymentstatus: "pending",
    }
  },
  {
    id: 123,
    amountDue: 56000,
    purchasedate: new Date("2026-1-6"),
    isCreditSale: false,
    paymentMethod: {
      paymentNum: 209888,
      paymentstatus: "pending",
    }
  },
  {
    id: 123,
    amountDue: 56000,
    purchasedate: new Date("2026-1-6"),
    isCreditSale: false,
    paymentMethod: {
      paymentNum: 209888,
      paymentstatus: "pending",
    }
  },
  {
    id: 123,
    amountDue: 56000,
    purchasedate: new Date("2026-1-6"),
    isCreditSale: false,
    paymentMethod: {
      paymentNum: 209888,
      paymentstatus: "pending",
    }
  },
];

// console.log(sales);
// console.table(sales[0]);
// console.dir(paymentMethod);

let arrayOfNum = [];

for (let i=0;i<10000;i++) {
  arrayOfNum.push(i+1)
}
// console.table(arrayOfNum)

console.time("time to answer")
arrayOfNum.reduce((curr, number) => curr+number, 0)
console.timeEnd("time to answer")

console.time("loop")
let sum =0
for (let i=0;i<arrayOfNum.length;i++) {
  sum +=arrayOfNum[i]
}
console.timeEnd("loop")