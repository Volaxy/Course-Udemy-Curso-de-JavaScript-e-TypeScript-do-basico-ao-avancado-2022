// The "Date()" informs the actual date
let date = new Date();
console.log(date.toString());

date = new Date(2021, 5, 20, 17, 40, 38, 800); // Year, Month, Day, Hour, Minute, Second, MilliSecond
console.log(date.toString());
date = new Date("2020-04-20 20:40:25");
console.log(date.toString());

console.log("Day: ", date.getDate());
console.log("Month: ", date.getMonth() + 1); // The Month begin at to 0
console.log("Year: ", date.getFullYear());
console.log("Hour: ", date.getHours());
console.log("Min: ", date.getMinutes());
console.log("Sec: ", date.getSeconds());
console.log("ms: ", date.getMilliseconds());
console.log("Week Day: ", date.getDay()); // 0 - Sunday, ...