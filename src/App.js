import React from "react";
import "./App.css";
import { CompleteMenu } from "./Header";
import { TesteAnimation } from "./Main";

function App() {
  return (
    <div className="App">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width" />
      </head>
      <header className="App-header">
        <CompleteMenu />
      </header>
      <main>
        <TesteAnimation />
      </main>
    </div>
  );
}

export default App;
