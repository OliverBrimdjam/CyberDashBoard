import React from "react";
import "./App.css";
import { CompleteMenu } from "./Header";
import { TesteDeRepasse, testeDeRepasse } from "./character/life";

function App() {
  testeDeRepasse("coisas");

  //player data
  var player = [
    {
      id: 1,
      nome: "eu",
      profile: 1
    }
  ];
  var charLifePath = [
    {
      saveNumber: 6,
      BTM: 5,
      damagePoints: 0,
      stun: 4,
      charId: 1
    }
  ];

  return (
    <div className="App">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width" />
      </head>
      <header className="App-header">
        <CompleteMenu />
      </header>
      <main></main>
    </div>
  );
}

export default App;
