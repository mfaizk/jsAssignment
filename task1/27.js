const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
//sort
var sortedAges = ages.sort();
console.log(sortedAges);
//max
var max = sortedAges[sortedAges.length - 1];
console.log(sortedAges[sortedAges.length - 1]);
//min
var min = sortedAges[0];
console.log(sortedAges[0]);

//Median
if (sortedAges.length % 2 == 0) {
  var medianAge =
    (sortedAges[sortedAges.length / 2] +
      sortedAges[sortedAges.length / 2 + 1]) /
    2;
  console.log("Median is", medianAge);
} else {
  var medianAge = sortedAges[Math.ceil(sortedAges.length / 2)];
  console.log("Median is" + medianAge);
}

// average
var sum = 0;
ages.forEach((a) => {
  sum = sum + a;
  //   console.log(sum);
});
var average = sum / ages.length;
console.log(average);

//range
var range = sortedAges[sortedAges.length - 1] - sortedAges[0];
console.log(range);

if (Math.abs(min - average) > Math.abs(max - average)) {
  console.log(Math.abs(min - average));
  console.log("Min average is greater");
} else {
  console.log("Max average is greater");
}
