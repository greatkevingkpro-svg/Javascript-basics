//// functions

function returnSumOfTwoNum(num1, num2) {
  let sum = num1 + num2;
  return sum;
}
let _sum = returnSumOfTwoNum(200, 200);
// console.log(_sum);



function welcomingMessage() {
  console.log("welcome to karibu groceries");
}
// welcomingMessage();



function calculateTax(amount, taxRAte = 0.18) {
  let tax = amount * taxRAte;
  return tax;
}
// console.log(calculateTax(5000));



let sum = 0;
let num = 0;

function arrayLoops(counter){
  for( let num = 1; num <= 10; num ++) {
    // console.log(`step ${num}: the sum is ${sum} + ${num} = ${sum + num}`);
    sum = sum + num;
  }
  return sum
}
console.log(arrayLoops(num));


let isNameValid = (name) => name.length > 2;
console.log(isNameValid("Kevin"));



let names = ["kevin","axcel","anna","yael","anitha","anitha","great"]
console.log(names);
let filterName = names.filter((name) => name === "great");
console.log(filterName);