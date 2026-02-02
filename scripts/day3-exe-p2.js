// Complex Validation
let dealerName = "Karl";
let costUgx = 15000;

// 1st solution
let isValidRecord = (dealerName.length >= 2) && (costUgx >= 10000);

console.log(isValidRecord);

// 2nd solution
if (dealerName.length >= 2 && costUgx >= 10000) {
  console.log("Valid record");
} else {
  console.log("Invalid record");
}


// Date Logging 

let date = new Date("2025-12-3");

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

console.log(`Sale on: ${day}/${month}/${year}`);