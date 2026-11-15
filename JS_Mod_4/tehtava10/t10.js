const lomake = document.querySelector("#source");
const etunimi = document.querySelector('input[name="firstname"]');
const sukunimi = document.querySelector('input[name="lastname"]');
const tulos = document.querySelector("#target");

lomake.addEventListener("submit", function (evt) {
    evt.preventDefault();
    tulos.innerText = `Nimesi on ${etunimi.value} ${sukunimi.value}`;
});