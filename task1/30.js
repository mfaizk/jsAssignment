var capsAlpha = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
var alpha = "abcdefghijklmnopqrstuvwxyz".split("");

var uid = `${Math.ceil(Math.random() * 100)}${Math.ceil(Math.random() * 100)}${
  capsAlpha[Math.ceil(Math.random() * 25)]
}${capsAlpha[Math.ceil(Math.random() * 25)]}${
  alpha[Math.ceil(Math.random() * 25)]
}${alpha[Math.ceil(Math.random() * 25)]}`;
console.log(uid);
