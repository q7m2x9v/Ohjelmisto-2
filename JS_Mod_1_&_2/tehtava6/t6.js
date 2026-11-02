const vastaus = confirm("Lasketaanko neliöjuuri?");
const tulosElementti = document.querySelector("#tulos");

if(vastaus) {
    const luku = Number(prompt("Anna luku:"));
    if (luku < 0) {
        tulosElementti.textContent = "Negatiivisen luvun neliöjuurta ei ole määritelty.";
    } else {
        const neliojuuri = Math.sqrt(luku);
        tulosElementti.textContent = "Neliöjuuri: " + neliojuuri;
    }

} else {
    tulosElementti.textContent = "Neliöjuurta ei lasketa.";
}
