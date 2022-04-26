function random(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function wait(msg, time) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== "string"){
            reject("Bad Value!");
            return;
        }

        setTimeout(() => {
            resolve(msg);
        }, time);
    });
}

let promises = [
    "First value",
    wait("Promise 1", 3000),
    wait("Promise 2", 5000),
    wait(111, 1000),
    "Other value"
];

// Se um falhar, todos falham
Promise.all(promises)
    .then(function(value) {
        console.log(value);
    })
    .catch(function(e) {
        console.log(e);
    });

promises = [
    wait("Promise 1", 3000),
    wait("Promise 2", 500),
    wait("Promise 3", 1000)
];

// Entrega o 1º a ser feito
Promise.race(promises)
    .then(function(value) {
        console.log(value);
    })
    .catch(function(e) {
        console.log(e);
    });

function donwloadPage() {
    let cache = false;

    if(cache) {
        return Promise.resolve("Page in cache");
    } else {
        return wait("Page", 3000);
    }
}

donwloadPage()
    .then(data => {
        console.log(data);
    })
    .catch(e => console.log(e));