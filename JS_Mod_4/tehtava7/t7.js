const kuva = document.querySelector("#target");
const teksti = document.querySelector("#trigger");

teksti.addEventListener("mouseenter", function () {
    kuva.src = "img/picB.jpg";
});

teksti.addEventListener("mouseleave", function () {
    kuva.src = "img/picA.jpg";
});
