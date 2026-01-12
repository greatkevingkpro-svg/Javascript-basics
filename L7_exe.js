function convertToFahrenheit(celsius) {
  console.log((celsius*9/5)+32);
}
convertToFahrenheit(25);

function convertToCelsius(fahrenheit) {
  console.log((fahrenheit-32)*5/9);
}
convertToCelsius(86);

function convertTemperature(degrees, unit) {
  if (unit === 'C') {
    unit = 'F';
    degrees = (degrees * 9 / 5) + 32;
    console.log(`${degrees}${unit}`);
  } else {
    unit = 'C';
    degrees = (degrees - 32) * 5 / 9;
    console.log(`${degrees}${unit}`);
  }

  // return degrees && unit;
}
convertTemperature(25,'C');
convertTemperature(86,'F');