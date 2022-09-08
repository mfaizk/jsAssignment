var w = 500;
var h = 1;
var age = 23;
function bmiCalculator(w, h) {
  return w / (h * h);
}
console.log(bmiCalculator(w, h));

if (age >= 20) {
  if (bmiCalculator(w, h) < 18.5) {
    console.log("Your are underweight");
  } else if (bmiCalculator(w, h) >= 18.5 && bmiCalculator(w, h) <= 24.5) {
    console.log("You are Normal");
  } else if (bmiCalculator(w, h) >= 25 && bmiCalculator(w, h) <= 29.9) {
  } else {
    console.log("you are obese");
  }
} else {
  console.log("Check after you are eligible <20");
}
