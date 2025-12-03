// Complex Validation
let dealerName = "Karl";
let costUgx = 15000;

let isValidRecord = (dealerName.length >= 2) && (costUgx >= 10000);

console.log(isValidRecord);

// Date Logging 

let date = new Date("2025-12-3");

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

console.log(`Sale on: ${day}/${month}/${year}`);