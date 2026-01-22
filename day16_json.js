let sales ={
  id: 1,
  title: "maize", 
  price: 5000,
}

let saleString = JSON.stringify(sales);
console.log(saleString);

localStorage.setItem("sales", saleString);

let storage = localStorage.getItem("sales",saleString);
let stringSales = JSON.parse(storage);

console.log(storage);
console.log(stringSales);



let creditSales = {
  id: 35,
  item: "beans",
  amountDue: 50000,
  dueDate: new Date("2026-1-25")
}

let stringCreditSale = JSON.stringify(creditSales);
console.log(stringCreditSale);

let dealerArray = '["dealer1", "dealer2","dealer3"]';

let dealerObject = JSON.parse(dealerArray);
console.log(dealerObject);

// fetch('https://fakestoreapi.com/products/1')

// fetch("https://fakestoreapi.com/products/1",{
//   method: "POST",
//   headers:{
//     "Content-Type":"appliction/json"
//   },
//   body:stringCreditSale
// })
// .then((response)=>{
//   console.log(response);
//   return response.json;
// })
// .then((data)=>{
//   console.log(`the data is here`, data)
// })