import React from "react";
import "./Main.css";

// this function will just to check the viewport width and realise if mobile or not
function checkViewportWidth() {
  let windowWidth = window.innerWidth;
  let viewType;

  if (windowWidth <= 500) {
    viewType = "mobile";
  } else {
    viewType = "desktop";
  }
  return viewType;
}

export function toggleMenu() {
  debugger;
  document
    .getElementsByClassName("painelAnimado")[0]
    .classList.toggle("hidden");
}

//necessary to change the function name and element className and Id
export function TesteAnimation() {
  return <div className="painelAnimado" id="cacaca" onClick={toggleMenu}></div>;
}
