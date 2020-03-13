import React from "react";
import "./App.css";
import { LogoG, MenuIcon, HeaderBar } from "./Header";

function App() {
  return (
    <div className="App">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width" />
      </head>
      <header className="App-header">
        <LogoG />
        <MenuIcon />
        <HeaderBar />
      </header>
    </div>
  );
}

export default App;
