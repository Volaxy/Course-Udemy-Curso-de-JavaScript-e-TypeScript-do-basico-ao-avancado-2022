function random(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function wait(msg, time) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== "string") reject("Bad Value!");

        setTimeout(() => {
            resolve(msg);
        }, time);
    });
}

wait("Connecting to DB", random(1, 3))
    .then(response => {
        console.log(response);
        return wait("Searching the data base...", random(1, 3));
    })
    .then(response => {
        console.log(response);
        return wait(53453, random(1, 3));
    })
    .then(response => {
        console.log(response);
    })
    .catch(e => {
        console.log("Error: ", e);
    });