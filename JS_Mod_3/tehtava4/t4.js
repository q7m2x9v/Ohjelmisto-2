const luvut = [];

let luku = Number(prompt("Anna luku (0 lopettaa):"));

while (luku !== 0) {
    luvut.push(luku);
    luku = Number(prompt("Anna luku (0 lopettaa):"));
}

luvut.sort(function(a, b) {
    return b - a;
});

console.log(luvut);
