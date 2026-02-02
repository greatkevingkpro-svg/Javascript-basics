let startYear = new Date("2025-1-1");
let endYear = new Date("2025-12-31");
let currentDate = new Date();

let passedDays = currentDate.getTime()- startYear.getTime();
console.log(passedDays / (1000 * 60 * 60 * 24));

let remainingDays = endYear.getTime()- currentDate.getTime();
console.log(remainingDays / (1000 * 60 * 60 * 24));

