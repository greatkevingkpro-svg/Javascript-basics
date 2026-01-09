// sets and maps

let users = [
  "zahra suliman",
  "kevin",
  "uwase",
  "malerbe",
  "zahra"
]

const uniqueUsers = new Set(users);

uniqueUsers.add("mark");

// console.log(uniqueUsers);


let sales = [
  {customer: 'fabrice', amountPaid: 5000, branch: 'kampala'},
  {customer: 'fabrice', amountPaid: 5000, branch: 'kampala'},
  {customer: 'fabrice', amountPaid: 5000, branch: 'kampala'},
  {customer: 'fabrice', amountPaid: 5000, branch: 'kampala'},
  {customer: 'fabrice', amountPaid: 5000, branch: 'kampala'}
]

let branches = sales.map((sale)=> sale.branch);

let uniqueBranches = new Set(branches);

let locationToCheck = 'Fort Portal';
let didKampMakeSales = uniqueBranches.has(locationToCheck);
console.log(`${didKampMakeSales? "yes" "no"}`);