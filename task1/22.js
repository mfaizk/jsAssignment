var givenMonth = 2;
var tdays;
var eDate = new Date("August 19, 1975 23:15:30");
eDate.setMonth(givenMonth);
// console.log(eDate.getMonth());

for (let i = 0; i <= 32; i++) {
  if (givenMonth != eDate.getMonth()) {
    break;
  }
  eDate.setDate(i);
  tdays = eDate.getDate();
}

console.log(tdays);
