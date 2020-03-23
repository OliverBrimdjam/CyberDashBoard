import React from "react";
import "./Header.css";
import { toggleMenu } from "./Main";

function LogoG() {
  return (
    <img
      className="Header__MainLogo"
      src="./images/cyberLogo 1.png"
      alt="Logo_main"
    />
  );
}

function MenuIcon() {
  return (
    <img
      className="Header__MenuIcon"
      src="./images/icones/menu-icon.png"
      alt="Menu_icon"
      onClick={toggleMenu}
    />
  );
}

function MenuBlock() {
  return <div className="Header__MenuBlock" id="MenuBlock"></div>;
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

export function CompleteMenu() {
  return (
    <div className="Header__CompleteMenu">
      <LogoG />
      <MenuIcon />
      <MenuBlock />
      <HeaderBar />
    </div>
  );
}
