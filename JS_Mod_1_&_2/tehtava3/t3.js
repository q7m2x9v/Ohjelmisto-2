const luku1 = Number(prompt("Anna ensimmäinen luku:"));
const luku2 = Number(prompt("Anna toinen luku:"));
const luku3 = Number(prompt("Anna kolmas luku:"));

const summa = luku1 + luku2 + luku3;
const tulo = luku1 * luku2 * luku3;
const keskiarvo = (luku1 + luku2 + luku3) / 3;

const summaElementti = document.querySelector("#summa");
summaElementti.textContent = "Summa: " + summa;

const tuloElementti = document.querySelector("#tulo");
tuloElementti.textContent = "Tulo: " + tulo;

const keskiarvoElementti = document.querySelector("#keskiarvo");
keskiarvoElementti.textContent = "Keskiarvo: " + keskiarvo;
