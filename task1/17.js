var date = new Date(Date.now());

var year = date.getFullYear().valueOf();
var month = date.getMonth().valueOf();
var date = date.getDate().valueOf();
var hours = date.getHours().toString();
var minute = date.getMinutes().valueOf();

//    - YYYY-MM-DD HH:mm

console.log(`${year}-${month}-${date} ${hours}:${minute}`);

//    - DD-MM-YYYY HH:mm

console.log(`${date}-${month}-${year} ${hours}:${minute}`);

//    - DD/MM/YYYY HH:mm

console.log(`${date}/${month}/${year} ${hours}:${month}`);
