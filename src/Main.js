// import React from "react";
import "./Main.css";

// this function will just to check the viewport width and realise if mobile or not
// function checkViewportWidth() {
//   let windowWidth = window.innerWidth;
//   let viewType;

//   if (windowWidth <= 500) {
//     viewType = "mobile";
//   } else {
//     viewType = "desktop";
//   }
//   return viewType;
// }

export function toggleMenu() {
  document
    .getElementsByClassName("Header__MenuBlock")[0]
    .classList.toggle("big");
}
