// loops

// for loop

for(let step = 1; step <= 10; step ++) {
  // run our loop and carry out any execution
  // console.log("step:", step);
}

// without loop

// let sum = 0;
// sum = 1+2+3+4+5+6+7+8+9+10;
// console.log(sum);

let sum = 0;

for( let counter = 1; counter <= 10; counter ++) {
  // console.log(`step ${counter}: the sum is ${sum} + ${counter} = ${sum + counter}`);
  sum = sum + counter;
}
// console.log(sum);

let firstName = "victor";

for(let index = 0; index <= firstName.length; index ++) {
  // console.log(firstName[index]);
  // console.log(`current ${index}`)
}

let isLoggedIn = false;

while(isLoggedIn === false) {
  console.log("Please login");

  {
    // check password
    isLoggedIn = true;
  }
  
}