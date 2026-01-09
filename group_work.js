function tonnageCheck(tonnage) {
  if (tonnage >= 1200) {
    true;
  } else {
    false;
  }
}
// console.log(tonnageCheck(200));

let sales = [
  { buyerName: "kevin", amountPaid: 15000 },
  { buyerName: "hana", amountPaid: 20000 },
  { buyerName: "david", amountPaid: 25000 },
  { buyerName: "ahmed", amountPaid: 30000 },
  { buyerName: "ismail", amountPaid: 35000 },
];

// let amount = sales.reduce((totalAmount, buyerName) => {
//   return totalAmount + buyerName.amountPaid
// }, 0)

// console.log(`The total amount that was paid is ${amount}`);
/**---------------------------------------- */

let creditSales = {
  id: 809,
  name: "kevin",
  item: "rice",
  amount: 50000,
};
let { name: nameOfTheBuyer, amount } = creditSales;
// console.log(nameOfTheBuyer);
// console.log(amount);

const maganjo = ["rice", "cow peas", "millet"];
const matuga = ["beans", "maize", "g-nuts"];
const combinedStock = [...maganjo, ...matuga];
// console.log(combinedStock)

const procurement = {
  produce: "beans",
  tons: 500,
};
const clone = { ...procurement, amountToPay: 100000 };
// console.log(procurement);
// console.log(clone);

let stockRecord = [
  { item: "beans", tonnage: 2500, produceDate: new Date("2026-1-6") },
  { item: "maize", tonnage: 1500, produceDate: new Date("2026-1-4") },
  { item: "rice", tonnage: 1000, produceDate: new Date("2026-1-65") },
];

// console.log(stockRecord);
// console.table(stockRecord);

function convertToNum(input){
  return Number(input);
}

try {
  let userInput = "500000"
  let result = convertToNum(userInput)

  if (isNaN(result)) {
    // throw new Error ("input is not valid number")
  }

  // console.log("converted number:",result);
} catch (error){
}

class KglProcurement {
  constructor(nameOfProduce,tonnageInKg,DealerName){
    this.nameOfProduce = nameOfProduce
    this.tonnageInKg = tonnageInKg
    this.DealerName = DealerName
  }
   
  isValidTonnage() {
    if (this.tonnageInKg>=1000){
      return true;
    } else {
      return false;
    }
  }
  
}


let kglProc1 = new KglProcurement("maize", 1000, "Ibrahim");

console.log(kglProc1.nameOfProduce,kglProc1.tonnageInKg,kglProc1.DealerName);

console.log(kglProc1.isValidTonnage());




class SalesAgent{
  constructor(item, quantityInKg, amount, buyerNAme){
    this.item = item
    this.quantityInKg = quantityInKg
    this.amount = amount 
    this.buyerNAme = buyerNAme
  }

  salesInfo() {
    return `this ${this.item} was bought by ${this.buyerNAme} and the amount paid is ${amount}`
  }

}

let salesRecord = new SalesAgent("beans", 150, 100000, "Eddy");
// console.log(salesRecord)

class Manager extends SalesAgent{
  constructor(item,amount,buyerNAme,comfirmation){
    super(item,amount,buyerNAme)
  }
}

class Item {
  constructor(Name, Price){
    this.Name = Name
    this.Price = Price
  }

  getPrice (){
    return `${this.Price}`
  }
}

class PerishableItem extends Item {
  constructor(Name, Price, daysUntilExpire){
    super(Name, Price)
    this.daysUntilExpire = daysUntilExpire
  }

  daysUntilExpiree () {
    let expireeDate = new Date("2026-2-26");
    let todaysDate = new Date();

    let remaingDays = (expireeDate.getTime()-todaysDate.getTime()) / 1000 / 60 / 60 / 24
    
    return remaingDays;
  }

}




