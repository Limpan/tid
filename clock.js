"use strict";

let d0, d1, d2, d3;
let timer = 300;

document.addEventListener('dblclick', () => {
    document.documentElement.requestFullscreen().catch((e) => {
        console.log(e);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    console.log('Starting clock...');

    d0 = document.getElementById('d0');
    d1 = document.getElementById('d1');
    d2 = document.getElementById('d2');
    d3 = document.getElementById('d3');

    updateClock();
    setInterval(updateClock, 100);
    setInterval(updateTimer, 1000);
});

function updateDigit(digit, value) {
    digit.childNodes[0].innerText = value;
}

function updateClock() {
    // let now = new Date();

    let s = timer % 60;
    let m = Math.floor(timer / 60);

    updateDigit(d0, s % 10);
    updateDigit(d1, Math.floor(s / 10));
    updateDigit(d2, m % 10);
    updateDigit(d3, Math.floor(m / 10))

    /*
    d0.childNodes[0].innerText = now.getMinutes() % 10;
    d1.childNodes[0].innerText = Math.floor(now.getMinutes() / 10);
    d2.childNodes[0].innerText = now.getHours() % 10;
    d3.childNodes[0].innerText = Math.floor(now.getHours() / 10);
    */
}

function updateTimer() {
    if (timer > 0) {
        timer--;
    }
}