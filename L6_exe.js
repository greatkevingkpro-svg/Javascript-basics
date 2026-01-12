let currentHour = 13;
let Name = "Kevin";

if (currentHour >= 6 && currentHour < 12) {
  // console.log(`Good morning ${Name}`);
} else if (currentHour >= 13 && currentHour < 17) {
  // console.log(`Good afternoon ${Name}`);
} else {
  // console.log(`Good night ${Name}`);
}

let Age = 5;
const isHoliday = true;

if ((Age <= 6 || Age >= 65) && isHoliday === !true) {
  // console.log("Discount");
} else {
  // console.log("No discount");
}



let coinFlip = Math.random();
// console.log(coinFlip);
let result = '';

if (coinFlip >= 0 && coinFlip < 0.5) {
  // console.log("heads");
  result = "heads";
} else {
  // console.log("tails")
  result = "tails";
}

// console.log(result);
let guessResult = "tails";

if (guessResult === result) {
  console.log("you win");
} else {
  console.log("you loose");
}