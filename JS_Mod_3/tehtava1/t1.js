const lukulista = [];

for (let i = 0; i < 5; i++) {
    const luku = parseInt(prompt("Anna luku:"), 10);
    lukulista.push(luku);
}

for (let i = lukulista.length - 1; i >= 0; i--) {
    console.log(lukulista[i]);
}
''