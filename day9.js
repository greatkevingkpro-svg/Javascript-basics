// higher order functions

// ordinary function
function greet() {
  return "hello!"
}

//HOF
function execute(action) {
  console.log(action())
}

execute(greet);




let produce = ["beans","maize","rice","tomato"]

produce.forEach((product,index)=>{
  console.log(`${product} is index number ${index}`)
})



let emails = [
  "kevin@gmail","axcel@gmail",
  "yael@gmail","anna@gmail"
]

function sendMail(emailAddress){
  // implement your code for send emails

  console.log(`email was successfuly sent to ${emailAddress}`);
}

emails.forEach((email) => {
  sendMail(email);
})

let capitalisedEmails = emails.map((email) => {
  return email.toUpperCase();
})

console.log(emails);
console.log(capitalisedEmails);



let ages = [23,14,54,76,18,10,17,9,12,19,10,34,76,37,15,25,43]

let filteredAges = ages.filter((age) => age <= 25);

console.log(ages);
console.log(filteredAges);

let sum = ages.reduce((sum, age) => {
  return sum + age
} , 0);

// console.log(sum);




let sales = [
  {customerName : 'kevin' , isCreditSale : true, amount : 10000},
  {customerName : 'alain' , isCreditSale : false, amount : 15000},
  {customerName : 'axel' , isCreditSale : true, amount : 50000},
  {customerName : 'anna' , isCreditSale : false, amount : 55000}
]

let filteredSales = sales.filter((sale) => sale.amount > 15000 && sale.isCreditSale === true);

// console.log(filteredSales);



let donations = [
  {donor:'paul' , amount:500},
  {donor:'kitsa' , amount:500},
  {donor:'odongo' , amount:300},
  {donor:'uwase' , amount:1500},
  {donor:'zahra' , amount:700}
]

let receivedDonations = donations.reduce((totalDonations, donor) => {
  return totalDonations + donor.amount
}, 0);

console.log(`we have so far received ${receivedDonations} USD for our target of 50,000 USD; and the donors are ${donations.donor}`);
