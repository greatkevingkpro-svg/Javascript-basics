let firstName = "kevin";

// if(firstName == "hana" || firstName == "kevin") {
//   console.log("You have won a car");
// } else {
//   console.log("you have won a bicycle");
// }

switch (firstName) {
  case "Axcel":
    console.log("hey you have a nice car");
    break;
  case "Isaac":
    // console.log("you car is not nice");
    break;
  default:
    // console.log("try again");

}


let arr = [2,3,4,6];
let sum = 0;
for(step = 0; step<arr.length; step++){
  sum = sum + arr[step];
  // console.log(arr[step]);
}

console.log(sum);


let array = [2,3,[37,"kevin"],35,[35,[365,44,[456,473]]]];

console.log(array[4][1][2][1]);