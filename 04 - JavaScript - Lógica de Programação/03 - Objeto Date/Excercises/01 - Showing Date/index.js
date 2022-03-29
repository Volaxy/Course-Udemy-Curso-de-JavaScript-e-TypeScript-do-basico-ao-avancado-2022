// 1nd --------------------------------------------------------------------------------

// function initialize() {
//     let dateTitle = document.querySelector("#current-date");

//     let currentDate = new Date();

//     //   0       1      2           3           4       5       6
//     // Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday
//     let dayWeek;
//     switch (currentDate.getDay()) {
//         case 0:
//             dayWeek = "Sunday";
//             break;
//         case 1:
//             dayWeek = "Monday";
//             break;
//         case 2:
//             dayWeek = "Tuesday";
//             break;
//         case 3:
//             dayWeek = "Wednesday";
//             break;
//         case 4:
//             dayWeek = "Thursday";
//             break;
//         case 5:
//             dayWeek = "Friday";
//             break;
//         case 6:
//             dayWeek = "Saturday";
//             break;
//     }

//     // January, February, March, April, May, June, July, August, September, October, November, December
//     let monthName;
//     switch (currentDate.getDay()) {
//         case 0:
//             monthName = "January";
//             break;
//         case 1:
//             monthName = "February";
//             break;
//         case 2:
//             monthName = "March";
//             break;
//         case 3:
//             monthName = "April";
//             break;
//         case 4:
//             monthName = "May";
//             break;
//         case 5:
//             monthName = "June";
//             break;
//         case 6:
//             monthName = "July";
//             break;
//         case 7:
//             monthName = "August";
//             break;
//         case 8:
//             monthName = "September";
//             break;
//         case 9:
//             monthName = "October";
//             break;
//         case 10:
//             monthName = "November";
//             break;
//         case 11:
//             monthName = "December";
//             break;
//     }

//     let month = currentDate.getMonth();
//     let day = currentDate.getDay();
//     let year = currentDate.getFullYear();

//     let unformattedHour = currentDate.getHours();
//     let hour = unformattedHour < 10 ? "0" + unformattedHour : unformattedHour;

//     let unformattedMinutes = currentDate.getMinutes();
//     let minute = unformattedMinutes < 10 ? "0" + unformattedMinutes : unformattedMinutes;

//     dateTitle.innerHTML = `${dayWeek}, ${monthName} ${day}, ${year} ${hour}:${minute}`;
// }

// initialize();

// 2nd --------------------------------------------------------------------------------

/*
let dateTitle = document.querySelector("#current-date");
let currentDate = new Date();

dateTitle.innerHTML = currentDate.toLocaleString("pt-BR", {
    dateStyle: "full",
    timeStyle: "short"
});
*/

// 3nd --------------------------------------------------------------------------------

let dateTitle = document.querySelector("#current-date");

let currentDate = new Date();

//   0       1      2           3           4       5       6
// Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday
let daysWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let dayWeek = daysWeek[currentDate.getDay()];

// January, February, March, April, May, June, July, August, September, October, November, December
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let monthName = months[currentDate.getMonth()];

let month = currentDate.getMonth();
let day = currentDate.getDay();
let year = currentDate.getFullYear();

let unformattedHour = currentDate.getHours();
let hour = unformattedHour < 10 ? "0" + unformattedHour : unformattedHour;

let unformattedMinutes = currentDate.getMinutes();
let minute = unformattedMinutes < 10 ? "0" + unformattedMinutes : unformattedMinutes;

dateTitle.innerHTML = `${dayWeek}, ${monthName} ${day}, ${year} ${hour}:${minute}`;