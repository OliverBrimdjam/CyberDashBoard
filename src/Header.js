import React from "react";
import "./Header.css";
import { toggleMenu } from "./Main";

export function LogoG() {
  return (
    <img
      className="Header__MainLogo"
      src="./images/cyberLogo 1.png"
      alt="Logo_main"
    />
  );
}

export function MenuIcon() {
  return (
    <img
      className="Header__MenuIcon"
      src="./images/icones/menu-icon.png"
      alt="Menu_icon"
      onClick={toggleMenu}
    />
  );
}

export function HeaderBar() {
  return (
    <img
      className="Header__MenuLine"
      src="./images/style-line.png"
      alt="header_bar"
    />
  );
}
