import React from "react";
import "./Main.css";

export function TesteAnimation() {
  const pupu = "blablalba";
  return (
    <div class="painelAnimado" id="cacaca" onClick="{mudaTudo()}">
      {pupu}
    </div>
  );
}

export function mudaTudo() {
  document.getElementById("cacaca").style.width = "200px";
}
