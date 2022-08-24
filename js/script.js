const overskrift = document.querySelector("h1")
overskrift.textContent;
console.log(overskrift.textContent);
overskrift.textContent = "Billeder";
console.log(overskrift.textContent);

const artikel1p = document.querySelector("article:nth-child(1) p");
artikel1p.textContent = "Her er et billede af noget natur."

const artikel1overskrift = document.querySelector("article:nth-child(1) h2");
artikel1overskrift.textContent = "Vandfald"

const artikel2p = document.querySelector("article:nth-child(2) p");
artikel2p.textContent = "Her er et billede af noget andet natur."

const artikel2overskrift = document.querySelector("article:nth-child(2) h2");
artikel2overskrift.textContent = "Ørken"

