// let ages = [23,24,11,45,365,234,37,46,10,19,35,67]

let product = {
  "name" : "milk",
  "weight" : 50,
  "price" : 2500,
  "purchasedBy" : "kitsa",
  "purchaseDate" : new Date("2025-12-10"),
  "isAvailable" : true,
  "currency" : "UGX"
}

console.log(product.name);


// console.log(product["price"]);
// console.log(product["isAvailable"]);

// product.currency = "USD"
// console.log(product.currency);




let sales = {
  "productName" : "Maize",
  "tonnageInKgs" : 500,
  "amountPaid" : 110000,
  "buyersName" : "Ibrahim"
}


sales.isCreditSale = true;
sales.isDueDate = new Date("2025-12-10");
console.log(sales);

console.log(sales.isDueDate);

for(const item of sales) {
  if(item === "Maize"){
    console.log("match found");
    break;
  }
}
