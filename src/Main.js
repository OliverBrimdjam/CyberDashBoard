import React from "react";
import "./Main.css";

// this function will just to check the viewport width
function checkWidth() {
  let windowWidth = window.innerWidth;
  let viewType;

  if (windowWidth <= 500) {
    viewType = "mobile";
  } else {
    viewType = "desktop";
  }
  return viewType;
}

//this function will check if the component is hide or not
function checkMenuDisplay(id) {
  let menuBlock = document.getElementById(id);
  let menuSituation = menuBlock.style.display;

  console.log(menuSituation + ": resposta do check");

  return menuSituation;
}

export function toggleMenu() {
  let viewType = checkWidth();
  let menuBlock = document.getElementById("cacaca");

  let menuStatus = checkMenuDisplay("cacaca");

  if (viewType === "mobile") {
    if (
      menuStatus === "inline-block" ||
      menuStatus === "inline" ||
      menuStatus === "inline-flex" ||
      menuStatus === "block"
    ) {
      menuBlock.style.display = "none";
    } else {
      menuBlock.style.display = "block";
    }
  } else {
  }
}

export function TesteAnimation() {
  return <div className="painelAnimado" id="cacaca" onClick={toggleMenu}></div>;
}

export function TesteAnimation2() {
  return <div className="painelAnimado2" id=""></div>;
}
