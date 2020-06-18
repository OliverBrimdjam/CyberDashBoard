import React from "react";
import "./Main.css";
import { GeneralHealth } from "./health/HealthPatch";
import { GeneralStats } from "./Stats/StatsPath";



export function toggleMenu() {
  document
    .getElementsByClassName("Header__MenuBlock")[0]
    .classList.toggle("big");
}

export function Main(props) {
  const { mainState, setMainState } = props;

  // const mainState = props.mainState;
  // const setMainState = props.setMainState;

  // const mainState = props;
  // const setMainState = props;

  return (
    <div>
      <div class="statBlock">
        <GeneralStats 
          mainState={mainState}
          setMainState={setMainState}
        />
      </div>
      <div class="healthBlock">
        <GeneralHealth
          mainState={mainState}
          setMainState={setMainState}
        />
      </div>
    </div>
  );
}
