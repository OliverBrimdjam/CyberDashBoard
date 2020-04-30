import React, { Component } from "react";
import "./App.css";
import { CompleteMenu } from "./Header";
import { Teste } from "./health/life";
import { GeneralRender } from "./Main";


var shotInfo = {
  dmg: 14,
  bodyPlace: "l.leg",
  profile: 1,
  shotType: "normal",
  btm: 4,
};

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
          <Teste lifePath={shotInfo} />
          <GeneralRender lifeInfo={lifeInfo}/>
        </main>
      </div>
    );
  }
}

export default App;
