 import React from "react";
import "./Main.css";
import { GeneralHealth } from "./health/HealthPatch";

// var lifeInfo = {
//   mortalSituation: "normal",
//   mortalNumber: 0,
//   stunSituation: "normal",
//   stunNumber: 0,
//   btm: 4,
//   wound: "normal",
//   head: 0,
//   torso:0,
//   rArm: 0,
//   lArm: 0,
//   rLeg: 0,
//   lLeg: 0
// }

var lifeInfo;

export function toggleMenu() {
  document
    .getElementsByClassName("Header__MenuBlock")[0]
    .classList.toggle("big");
}

export function GeneralRender(props) {
  lifeInfo = props;

  const [woundLife, setWound] = React.useState(lifeInfo.wound);
  const [stunStat, setStun] = React.useState(lifeInfo.stunSituation);

  const [headDmg, setHeadDmg] = React.useState(lifeInfo.head);
  const [torsoDmg, setTorsoDmg] = React.useState(lifeInfo.torso);
  const [rArmDmg, setRarmDmg] = React.useState(lifeInfo.rArm);
  const [lArmDmg, setLarmDmg] = React.useState(lifeInfo.lArm);
  const [rLegDmg, setRlegDmg] = React.useState(lifeInfo.rLeg);
  const [lLegDmg, setLlegDmg] = React.useState(lifeInfo.lLeg);
  




  return(
    <div>
      {/* <label>{woundLife}</label> */}

      <GeneralHealth 

        lifeInfo={lifeInfo}//big object life data

        //situation states
        stunStat={stunStat}
        setStun={setStun}
        woundLife={woundLife}
        setWound={setWound}

        //damage states
        headDmg={headDmg}
        setHeadDmg={setHeadDmg}
        torsoDmg={torsoDmg}
        setTorsoDmg={setTorsoDmg}
        rArmDmg={rArmDmg}
        setRarmDmg={setRarmDmg}
        lArmDmg={lArmDmg}
        setLarmDmg={setLarmDmg}
        rLegDmg={rLegDmg}
        setRlegDmg={setRlegDmg}
        lLegDmg={lLegDmg}
        setLlegDmg={setLlegDmg}
        
      
      />

      
      
    </div>
  );
}




