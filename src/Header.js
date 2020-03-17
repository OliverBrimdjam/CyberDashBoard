import React from "react";
import "./Header.css";
import { mudaTudo } from "./Main";

export function LogoG() {
  return (
    <img
      class="Header__MainLogo"
      src="./images/cyberLogo 1.png"
      alt="Logo_main"
    />
  );
}

export function MenuIcon() {
  return (
    <img
      class="Header__MenuIcon"
      src="./images/icones/menu-icon.png"
      alt="Menu_icon"
      onClick={mudaTudo}
    />
  );
}

export function HeaderBar() {
  return (
    <img
      class="Header__MenuLine"
      src="./images/style-line.png"
      alt="header_bar"
    />
  );
}
