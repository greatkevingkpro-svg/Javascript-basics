let product = {
  name: "basketball",
  price: 2095,
};
console.log(product);

product.price = 2095 + 500;
console.log(product);

product["delivery-time"] = "3 days";
console.log(product);

const product1 = {
  name: "beans",
  price: 5000,
};
const product2 = {
  name: "maize",
  price: 2000,
};
function comparePrice() {
  if (product1.price < product2.price) {
    return product1.name;
  } else if (product2.price < product1.price) {
    return product2.name;
  }
}
console.log(comparePrice());
