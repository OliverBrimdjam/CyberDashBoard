import React, { Component } from "react";
import "./App.css";
import { CompleteMenu } from "./Header";
import { Teste } from "./health/life";

var shotInfo = {
  dmg: 14,
  bodyPlace: "l.leg",
  profile: 1,
  shotType: "normal",
  btm: 4,
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CompleteMenu />
        </header>
        <main>
          <Teste lifePath={shotInfo} />
        </main>
      </div>
    );
  }
}

export default App;
