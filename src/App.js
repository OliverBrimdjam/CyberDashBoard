import React, { Component } from "react";
import "./App.css";
import { CompleteMenu } from "./Header";
import { Teste } from "./character/life";

var shotInfo = {
  dmg: 14,
  bodyPlace: "l.leg",
  profile: 1,
  shotType: "normal",
  btm: 4
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
        <header className="App-header">
          <CompleteMenu />
        </header>
        <main>
          <Teste playerPath={shotInfo} />
        </main>
      </div>
    );
  }
}

export default App;
