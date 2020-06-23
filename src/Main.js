import React from "react";
import "./Main.css";
import { GeneralHealth } from "./health/HealthPatch";
import { GeneralStats } from "./Stats/StatsPatch";
import { BodyShape } from "./shape/BodyShape";

export function toggleMenu() {
  document
    .getElementsByClassName("Header__MenuBlock")[0]
    .classList.toggle("big");
}

export function Main(props) {
  const { mainState, setMainState } = props;

  return (
    <div class="mainBlock">
      <div class="mainBlock__session1">
        <div class="mainBlock__session1__statBlock">
          <GeneralStats 
            mainState={mainState}
            setMainState={setMainState}
          />
        </div>
        <div class="mainBlock__session1__healthBlock">
          <GeneralHealth
            mainState={mainState}
            setMainState={setMainState}
          />
        </div>
      </div>
      <div class="mainBlock__shapeBlock">
        <BodyShape />
      </div>
    </div>
  );
}
