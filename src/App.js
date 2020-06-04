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

var statsInfo = {
  int: 4,
  refBase: 5,
  refInst: 6,
  tech: 4,
  cool: 3,
  attr: 4,
  luck: 4,
  MA: 7,
  body: 4,
  EmpBase: 8,
  EmpInst: 6
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
          <GeneralRender lifeInfo={lifeInfo} statsInfo={statsInfo}/>
        </main>
      </div>
    );
  }
}

export default App;
