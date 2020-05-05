import React, { Component } from "react";
import "./App.css";
import { CompleteMenu } from "./Header";
import { GeneralRender } from "./Main";

var lifeInfo = {
  mortalSituation: "normal",
  mortalNumber: 0,
  stunSituation: "normal",
  stunNumber: 0,
  btm: 4,
  wound: "normal",
  head: 0,
  torso:0,
  rArm: 0,
  lArm: 0,
  rLeg: 0,
  lLeg: 0
}

console.log("App:" + lifeInfo.torso);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CompleteMenu />
        </header>
        <main>
          <GeneralRender lifeInfo={lifeInfo}/>
        </main>
      </div>
    );
  }
}

export default App;
