'use strict';
const names = ['John', 'Paul', 'Jones'];
const lista = document.querySelector("#target");

for (let i = 0; i < names.length; i++) {
    lista.innerHTML += `<li>${names[i]}</li>`;
}