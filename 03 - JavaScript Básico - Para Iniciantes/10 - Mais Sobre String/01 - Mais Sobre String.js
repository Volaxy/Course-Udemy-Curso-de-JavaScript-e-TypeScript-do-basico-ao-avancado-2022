let scape = "A \"text\""; // To scape a character, like the ", put the \ before the character.

// Strings contain indices, starting with 0
//          01234567
let word = "A string";
console.log(word[5]);
console.log(word.charAt(3)); // The "charAt()" return the value of the index
console.log(word.concat(" with indexes")); // The "concat()" concat the string variable with other string

console.log(word.indexOf("str")); // The "indexOf()" return the index of the string
console.log(word.indexOf("str", 5)); // The "indexOf()" with a number return the index of the string starting from the number
console.log(word.lastIndexOf("str")); // The "indexOf()" return the index of the string from right to left

console.log(word.replace("str", "Other")) // The "replace()" replace (¬_¬) the 1nd value by the 2nd value
console.log(word.length) // The ".length" return the length ('_') of the string

console.log(word.slice(2, 6)) // The "slice()" cut a piece of string
console.log(word.slice(-3)) // The "slice()" cut a piece of string from the difference between the length and the number. Ex.: word.length - NUMBER

console.log(word.split("s")); // The "split()" creates a list separating the original string by the string passed as a parameter by the function
console.log(word.split("s", 1)); // The "split()" creates a list with a max length separating the original string by the string passed as a parameter by the function