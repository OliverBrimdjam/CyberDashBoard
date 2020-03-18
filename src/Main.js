import React from "react";
import "./Main.css";

// this function will just to check the viewport width and realise if mobile or not
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

export function toggleMenu() {
  let viewType = checkWidth();
  let menuBlock = document.getElementById("cacaca"); //need to change the id
  //this step of function is working and toggle the hide/show status of menu on mobile
  if (viewType === "mobile") {
    if (menuBlock.style.left === "32px") {
      menuBlock.style.left = "320px";
      console.log("chegou");
    } else {
      menuBlock.style.left = "32px";
      console.log("aqui");
    }
  } else {
    //lack of the desktop function to shift the menu hide/show status
  }
}

//necessary to change the function name and element className and Id
export function TesteAnimation() {
  return <div className="painelAnimado" id="cacaca" onClick={toggleMenu}></div>;
}
