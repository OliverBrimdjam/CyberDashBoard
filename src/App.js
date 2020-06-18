import React from "react";
import "./App.css";
import { CompleteMenu } from "./Header";
import { Main } from "./Main";

var generalState = {
  //health
  "mortalSituation": "normal",
  "mortalNumber": 0,
  "stunSituation": "normal",
  "stunNumber": 0,
  "btm": 4,
  "wound": "normal",
  "head": 0,
  "torso":0,
  "rArm": 0,
  "lArm": 0,
  "rLeg": 0,
  "lLeg": 0,
  //stats
  "int": 4,
  "refBase": 5,
  "refInst": 6,
  "tech": 4,
  "cool": 3,
  "attr": 4,
  "luck": 4,
  "MA": 7,
  "body": 4,
  "EmpBase": 8,
  "EmpInst": 6
};



export function App(){
  const [mainState, setMainState] = React.useState(generalState);

  return(
    <div className="App">
      <header className="App-header">
        <CompleteMenu />
      </header>
      <main>
        <Main mainState={mainState} setMainState={setMainState}/>
      </main>
    </div>
  );
} 

