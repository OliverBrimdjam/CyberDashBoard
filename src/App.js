import React from "react";
import "./App.css";
import { LogoG, MenuIcon, HeaderBar } from "./Header";
import { TesteAnimation, TesteAnimation2 } from "./Main";

function App() {
  return (
    <div className="App">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width" />
      </head>
      <header className="App-header">
        <LogoG />
        <MenuIcon />
        <HeaderBar />
      </header>
      <main>
        <TesteAnimation />
        <TesteAnimation2 />
      </main>
    </div>
  );
}

export default App;
