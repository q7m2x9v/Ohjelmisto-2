const heitot = Number(prompt("Montako kertaa noppaa heitetään"));
let summa = 0;
for (let i = 1; i <= heitot; i++) {
    const noppa = Math.floor(Math.random() * 6) + 1;
    console.log(noppa);
    summa = summa + noppa;
}
const tulosElementti = document.querySelector("#tulos");
tulosElementti.textContent = "Nopanheittojen summa: " + summa;
