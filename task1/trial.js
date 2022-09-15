// // var a = ["hello", "am", "faiz", 1, 2];
// // var b = [];
// // // a.forEach((e) => {
// // //   if (typeof e == "string") {
// // //     b.push(e);
// // //   }
// // // });

// // // for (let element of a) {
// // //   if (typeof element == "string") {
// // //     b.push(element);
// // //   }
// // // }

// // for (let element of a) {
// //   if (typeof element == "number") {
// //     b.push(element);
// //   }
// // }

// // console.log(b);

// // var a = ["hello", "am", "faiz", 1, 2];
// // function sayName() {
// //   var a = "Mohd";
// //   function say() {
// //     console.log(a);
// //   }
// //   say();
// // }
// // sayName();

// // TODO: protypal inheriatnce
// // var a = ["hello", "faiz"];

// // Array.prototype.heyArray = function () {
// //   console.log("Total elements are " + this.length);
// // };

// // a.heyArray();
// // TODO: prototypal inheritance inside String available for all

// // String.prototype.truelength = function () {
// //   return this.trim().length;
// // };

// // console.log("faiz".truelength());

// var ar1 = {
//   name: "faiz",
//   lname: "Khan",
// };

// let arr = [3, 2, 1, "jatin", "faiz"];
// // to remove first element from the array
// arr.shift();
// console.log(arr);
// //to remove last element from the array and insert your name
// arr = arr.map((e) => {
//   if (e == arr[arr.length - 1]) {
//     return "Ashutosh";
//   } else {
//     return e;
//   }
// });

// console.log(arr);

function sayHello() {
  console.log("Hello");
}
function Hola() {
  console.log("Hello");
}
Hola();

sayHello();
