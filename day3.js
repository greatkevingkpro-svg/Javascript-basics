let answer1 = "Kevin";
let answer2 = "Kevin";

let comparison = (answer1 != answer2);
// console.log(comparison);
// console.log(typeof(answer2));

let age = 18;
let age1 = '18';

// console.log(age !== age1);



let customerReceiptNumber = null;
customerReceiptNumber = 23;

let isReturningCustomer = customerReceiptNumber !== null;
// console.log(isReturningCustomer);

let costOfRice = 3000;
let costOfBeans = 3500;
let customersMoney = 2000;
let isUgandaShillings = true;

let canPayForRice = customersMoney >= costOfRice || isReturningCustomer;
// console.log(canPayForRice);

let canPayForBeans = (customersMoney >= costOfBeans && isReturningCustomer) || isUgandaShillings;
// console.log(canPayForBeans);



let schoolFees = 80000;
let schoolFeesDue = 70000;

let hasPaidDue = schoolFeesDue <= schoolFees;
// console.log(hasPaidDue);

/*
if(hasPaidDue) {
  console.log('you have paid all the dues');
} else {
  console.log("you haven't paid all the dues");
}
*/

// -- ///
/**
 * Date object
 */

let date = new Date();

// console.log(date);

// console.log(date.toLocaleString('en-GB'));

let currentYear = date.getFullYear();

// console.log(date.getFullYear());

let year = 1923
// console.log(currentYear - year);



// console.log(date.getMonth()+1);

// timestamp from the EPOC time 1 January 2025
// console.log(date.getTime());

let purchaseDate = new Date("2025-11-15");
let currentDate = new Date();

let passedTime = currentDate.getTime()- purchaseDate.getTime();
let passedTimeDif = passedTime / (1000 * 60 *60);

// console.log(passedTime);
// console.log(passedTimeDif);

