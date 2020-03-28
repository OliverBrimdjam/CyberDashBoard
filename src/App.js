import React, { Component } from "react";
import "./App.css";
import { CompleteMenu } from "./Header";
import Teste from "./character/life";

const playerId = {
  id: 1,
  name: "eu",
  profile: 1
};

class App extends Component {
  state = {
    playInfo: [
      {
        saveNumber: 6,
        BTM: 5,
        damagePoints: 0,
        damageUpdate: 0,
        stun: 4,
        charId: 1,
        hitPlace: "torso"
      }
    ]
  };

  render() {
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
          <Teste propost={playerId} />
        </main>
      </div>
    );
  }
}

export default App;
