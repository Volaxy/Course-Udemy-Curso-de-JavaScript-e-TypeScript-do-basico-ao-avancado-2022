function sayHi() {

}

// First-class objects
// Function expression
let imAData = function() {
    console.log("I'm a data");
};

function executeFunction(func) {
    func();
}

executeFunction(imAData);

// Arrow function
let arrow = () => {
    console.log("I'm a arrow function");
};
arrow();

// Into an object
let obj = {
    tell() {
        console.log("I'm talking");
    }
};
obj.tell();