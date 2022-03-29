function initialize() {
    const clock = document.querySelector(".clock");
    const start = document.querySelector(".start");
    const pause = document.querySelector(".pause");
    const stop = document.querySelector(".stop");

    let seconds = 0;
    let timer;
    start.addEventListener("click", function(event){
        clearInterval(timer);
        clock.style.color = "#000";

        timer = setInterval(function() {
            clock.innerHTML = getTimeFromSeconds(++seconds);
        }, 1000);
    });

        function getTimeFromSeconds(seconds) {
            let date = new Date(seconds * 1000);

            return date.toLocaleTimeString("pt-BR", {
                hour12: false,
                timeZone: "GMT"
            });
        }
    // *********************************************************

    pause.addEventListener("click", function(event){
        clock.style.color = "#f00";

        clearInterval(timer);
    });

    stop.addEventListener("click", function(event){
        clock.style.color = "#f00";

        clearInterval(timer);
        seconds = 0;

        clock.innerHTML = getTimeFromSeconds(0);
    });
}

initialize();