var date = new Date();
//Year
console.log(date.getFullYear().toString());
//month
console.log(date.getMonth().valueOf());
//date
console.log(date.getDate().valueOf());
//day as number
console.log(date.getDay().valueOf());
//hours
console.log(date.getHours().valueOf());
//minute
console.log(date.getMinutes().valueOf());
//numbers of seconds elapsed from January 1, 1970 to now

console.log(Date.now("Jan 1, 1970"));
