let paragraphs = document.querySelectorAll(".paragraphs p");
console.log(paragraphs);

const bodyStyle = getComputedStyle(document.body);
const backgroundColorBody = bodyStyle.backgroundColor;
console.log(backgroundColorBody);

for(let p of paragraphs) {
    console.log(p);

    p.style.backgroundColor = backgroundColorBody;
    p.style.color = "#fff";
}