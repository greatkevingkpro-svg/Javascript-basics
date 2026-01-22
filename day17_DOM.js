// debugger
// console.log(document);

let welcomeP = document.getElementById("welcome");
let infoP = document.getElementsByClassName("info");
let welcomeP2 = document.querySelector("#welcome");


// console.log(infoP.item(0).textContent);
for(let i = 0; i<infoP.length; i++) {
  console.log(infoP.item(i).textContent)
}


console.log(welcomeP.textContent);
console.log(welcomeP2.textContent);

let theParagr = document.querySelector(".parent-div p");
console.log(theParagr.textContent);