const maara = Number(prompt("Montako osallistujaa?"));
const nimet = [];

for (let i = 0; i < maara; i++) {
    const nimi = prompt("Anna osallistujan nimi:");
    nimet.push(nimi);
}

nimet.sort();

let html = "";

for (let i = 0; i < nimet.length; i++) {
    html = html + "<li>" + nimet[i] + "</li>";
}

document.querySelector("#osallistujat").innerHTML = html;
