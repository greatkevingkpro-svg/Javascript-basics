let startYear = new Date("2025-1-1");
let endYear = new Date("2025-12-31");
let currentDate = new Date();

let passedDays = currentDate.getTime()- startYear.getTime();
let daysPassed = passedDays / (1000 * 60 * 60 * 24);
console.log(daysPassed);

let remainingDays = endYear.getTime()- currentDate.getTime();
let daysRemain = remainingDays / (1000 * 60 * 60 * 24);
console.log(daysRemain);

let totalNumDays = daysPassed + daysRemain;
console.log(totalNumDays);
