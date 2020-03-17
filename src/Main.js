import React from "react";
import "./Main.css";

export function mudaTudo() {
  document.getElementById("cacaca").style.width = "200px";
}
export function TesteAnimation() {
  return <div class="painelAnimado" id="cacaca" onClick={mudaTudo}></div>;
}
