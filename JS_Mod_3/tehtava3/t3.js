const koirat = [];

for (let i = 0; i < 6; i++) {
    const nimi = prompt("Anna koiran nimi:");
    koirat.push(nimi);
}

koirat.sort();
koirat.reverse();

let html = "";

for (let i = 0; i < koirat.length; i++) {
    html = html + "<li>" + koirat[i] + "</li>";
}

document.querySelector("#koirat").innerHTML = html;
