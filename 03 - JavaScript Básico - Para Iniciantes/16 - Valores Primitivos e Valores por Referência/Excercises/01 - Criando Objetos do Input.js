// To avoid polluting the global scope of the site, or code interference with some JS library (such as overriding some library variable) the concept of a function that will be executed when the page loads is used.
function initialize() {
    function createUser(firstName, lastName, weight, height) {
        return {
            firstName,
            lastName,
            weight,
            height
        }
    }

    const mainForm = document.querySelector(".main-form"); // The "querySelector()" select any element in the HTML page using CSS selector syntax
    const resultDiv = document.querySelector(".result");

    const users = [];

    // This is the older form
    /* mainForm.onsubmit = function(event) {
        event.preventDefault();

        alert(1);
    }; */ // When using the "=", it is necessary to put the ";" at the end of the expression in which the assignment is being made

    // This is the newest way
    // This adds an event passing a function as an argument
    mainForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const firstName = mainForm.querySelector(".firstName").value;
        const lastName = mainForm.querySelector(".lastName").value;
        const weight = mainForm.querySelector(".weight").value;
        const height = mainForm.querySelector(".height").value;

        resultDiv.innerHTML += `<p>First Name: <b>${firstName}</b>, Last Name: <b>${lastName}</b>, Weight: <b>${weight}</b>, Height: <b>${height}</b></p>`;
        
        users.push(createUser(firstName, lastName, weight, height));

        console.log(users);

        // To get the input value, put the ".value" after the input
        // console.log(firstName.value, lastName.value, weight.value, height.value);
    });
}

initialize();