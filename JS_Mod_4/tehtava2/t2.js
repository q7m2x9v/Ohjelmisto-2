const lista = document.querySelector("#target");

const eka = document.createElement("li");
eka.innerText = "First item";
lista.appendChild(eka);

const toka = document.createElement("li");
toka.innerText = "Second item";
lista.appendChild(toka);
toka.classList.add("my-item");

const kolmas = document.createElement("li");
kolmas.innerText = "Third item";
lista.appendChild(kolmas);

