// Tonnage Validation

let procurementTonnageKg = 1500;
let meetTheRequirement = procurementTonnageKg >= 1000;

console.log(meetTheRequirement);

// Strictness Check

let costStr = "5000";
let costNum = 5000;

console.log(costStr == costNum);
console.log(costStr === costNum);

/*
the === are safe for KGL because,
they don't just compare if the value are equal,
and they are of the same date type.
*/