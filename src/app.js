/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function Number() {
  let arrnumeros = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "JOKER"
  ];

  let randomnumber = Math.floor(Math.random() * 14);
  return arrnumeros[randomnumber];
}

function crearPinta() {
  let ArrPinta = ["♥", "♠", "♦", "♣"];
  let randomPinta = Math.floor(Math.random() * 4);
  if (ArrPinta[randomPinta] === "♥" || ArrPinta[randomPinta] === "♦") {
    document.querySelector("#header").style.color = "red";
    document.querySelector("#footer").style.color = "red";
  }

  return ArrPinta[randomPinta];
}

window.onload = function generar() {
  document.querySelector("#center").innerHTML = Number();
  const pinta = crearPinta();
  if (pinta === "♥" || pinta === "♦") {
    document.querySelector("#center").style.color = "red";
  } else {
    document.querySelector("#center").style.color = "black";
    document.querySelector("#footer").style.color = "black";
    document.querySelector("#header").style.color = "black";
  }
  document.querySelector("#header").innerHTML = pinta;
  document.querySelector("#footer").innerHTML = pinta;
  document.querySelector("button").addEventListener("click", generar);
};
