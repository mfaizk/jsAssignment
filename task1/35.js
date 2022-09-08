var ar = ["Hello", "Hola", "Yo", "Hello"];

for (let i = 0; i < ar.length; i++) {
  for (let j = i + 1; j < ar.length; j++) {
    if (ar[i] == ar[j]) {
      console.log("Duplicate found");
      break;
    }
  }
}
