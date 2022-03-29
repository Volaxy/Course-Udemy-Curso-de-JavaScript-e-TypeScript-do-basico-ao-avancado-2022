function showHour() {
    let date = new Date();

    return date.toLocaleString("pt-BR", {
        hour12: false
    });
}

const timer = setInterval(function() {
    console.log(showHour());
}, 1000);

setTimeout(function() {
    clearInterval(timer);
}, 5000);

setTimeout(function() {
    console.log("Hello, World!");
}, 7000);