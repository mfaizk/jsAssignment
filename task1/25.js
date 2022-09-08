var shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

if (!shoppingCart.includes("Meat")) {
  shoppingCart.unshift("Meat");
  console.log(shoppingCart);
}
if (!shoppingCart.includes("Sugar")) {
  shoppingCart.push("Sugar");
  console.log(shoppingCart);
}
var honeyAllery = true;
if ((honeyAllery = true)) {
  shoppingCart = shoppingCart.filter((e) => e != "Honey");
  console.log(shoppingCart);
}

var i = shoppingCart.findIndex((e) => e == "Tea");
shoppingCart[i] = "Green Tea";
console.log(shoppingCart);
