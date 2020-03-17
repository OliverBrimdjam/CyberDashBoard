import React from "react";
import "./App.css";
import { LogoG, MenuIcon, HeaderBar } from "./Header";
import { TesteAnimation, mudaTudo } from "./Main";

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
      <main>
        <TesteAnimation />
      </main>
    </div>
  );
}

export default App;
