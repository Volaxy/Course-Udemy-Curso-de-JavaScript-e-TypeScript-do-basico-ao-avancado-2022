function random(min=0, max=3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function wait(msg, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {    
            if(typeof msg !== "string"){
                reject("Bad Value!");
                return;
            }

            resolve(msg + " - Passei na promise");
            return;
        }, time);
    });
}
/*
wait("Fase 1", random())
    .then(value => {
        console.log(value);
        return wait("Fase 2", random());
    })
    .then(fase => {
        console.log(fase);
        return wait("Fase 3", random());
    })
    .then(fase => {
        console.log(fase);
    })
    .catch(e => console.log(e));*/

async function executa() {
    try {
        let fase1 = await wait("Fase 1", random());
        console.log("Terminamos na fase: ", fase1);
        let fase2 = await wait(324, random());
        console.log("Terminamos na fase: ", fase2);
        let fase3 = await wait("Fase 3", random());
        console.log("Terminamos na fase: ", fase3);
    } catch(e) {
        console.log(e);
    }
}

executa();