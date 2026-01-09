class Sale {
  id = 1;
  amount = 10000;
  purchaseDate ;
  isCreditSale = true;

  constructor(id,amount,purchaseDate,isCreditSale){
    this.id = id
    this.amount = amount
    this.purchaseDate = purchaseDate
    this.isCreditSale = isCreditSale
  }
}

let sale1 = new Sale(1,4500,new Date("2026-1-23"),true);
let sale2 = new Sale(3,10000,new Date("2026-1-4"),false)

console.log(sale1);
console.log(sale2);

class Procurment {
  name
  tonnage
  totalCost
  constructor(name,tonnage,totalCost){
    this.name = name
    this.tonnage = tonnage
    this.totalCost = totalCost
  }
}

let product1 = new Procurment("kevin",1500,40000);

console.log(product1.name,product1.tonnage,product1.totalCost)