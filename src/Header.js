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

function MenuLab(props) {
  return <label className="Header__MenuBlock__MenuLab">{props.title}</label>;
}

function MenuBlock() {
  const chamadaTeste = "Equips";
  return (
    <div className="Header__MenuBlock" id="MenuBlock">
      <MenuLab title="Main" />
      <MenuLab title="Character" />
      <MenuLab title="Combat" />
      <MenuLab title={chamadaTeste} />
    </div>
  );
}

function HeaderBar() {
  return (
    <img
      className="Header__MenuLine"
      src="./images/style-line.png"
      alt="header_bar"
    />
  );
}

function MetaInfo() {
  return (
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width" />
    </head>
  );
}

export function CompleteMenu() {
  return (
    <div className="Header__CompleteMenu">
      <MetaInfo />
      <LogoG />
      <MenuIcon />
      <MenuBlock />
      <HeaderBar />
    </div>
  );
}
