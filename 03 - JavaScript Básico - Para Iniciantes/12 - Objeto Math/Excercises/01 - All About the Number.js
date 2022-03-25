const number = Number(prompt("Enter your number"));

const titleNumber = document.getElementById("title-number"); // Get an element in HTML through the id
const textDiv = document.getElementById("text");

titleNumber.innerHTML = number;

textDiv.innerHTML += `<p>Square root: ${number ** (1/2)}</p>`;
textDiv.innerHTML += `<p>${number} is integer: ${Number.isInteger(number)}</p>`;
textDiv.innerHTML += `<p>Is NaN: ${isNaN(number)}</p>`;
textDiv.innerHTML += `<p>Rounding down: ${Math.floor(number)}</p>`;
textDiv.innerHTML += `<p>Rounding down: ${Math.ceil(number)}</p>`;
textDiv.innerHTML += `<p>With 2 decimal places: ${number.toFixed(2)}</p>`;