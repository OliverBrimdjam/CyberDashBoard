//this is a Repository with example code
//this code is the first working example of complete state lift


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

  const [headLife, setHeadLife] = React.useState(lifeInfo.head);
  

  var woundSwifter = (newWound) => {
    setWound(newWound);
  }

  var lifeChanger = (limb) => {
    setHeadLife(limb);
  }


  return(
    <div>
      <label>{woundLife}</label>

      <GeneralHealth lifeInfo={lifeInfo} settler={woundSwifter} lifechanger={lifeChanger} render={headLife}/>

      <br/>
      <label>{headLife}</label>
    </div>
  );
}




// switch (limb){

    //   case "head":
    //     if (operation === "+"){
    //       lifeInfo.head += amount;
    //       setHeadLife(lifeInfo.head);
    //     }else{
    //       lifeInfo.head -= amount;
    //       setHeadLife(lifeInfo.head);
    //     }
    //     break;

    //   case "torso":
    //     if (operation === "+"){
    //       torsoLife += amount;
    //       setTorsoLife(torsoLife);
    //     }else{
    //       torsoLife -= amount;
    //       setTorsoLife(torsoLife);
    //     }
    //     break;

    //   case "rArm":
    //     if (operation === "+"){
    //       rArmLife += amount;
    //       setRarmLife(rArmLife);
    //     }else{
    //       rArmLife -= amount;
    //       setRarmLife(rArmLife);
    //     }
    //     break;
    //   case "lArm":
    //     if (operation === "+"){
    //       lArmLife += amount;
    //       setLarmLife(lArmLife);
    //     }else{
    //       lArmLife -= amount;
    //       setLarmLife(lArmLife);
    //     }
    //     break;
    //   case "rLeg":
    //     if (operation === "+"){
    //       rLegLife += amount;
    //       setRlegLife(rLegLife);
    //     }else{
    //       rLegLife -= amount;
    //       setRlegLife(rLegLife);
    //     }
    //     break; 
    //   case "lLeg":
    //     if (operation === "+"){
    //       lLegLife += amount;
    //       setLlegLife(lLegLife);
    //     }else{
    //       lLegLife -= amount;
    //       setLlegLife(lLegLife);
    //     }
    //     break;
    //   default:
    //     console.log ("health component do not identiy the bodypart");
    // }

    // const [torsoLife, setTorsoLife] = React.useState(lifeInfo.torso);
  // const [rArmLife, setRarmLife] = React.useState(lifeInfo.rArm);
  // const [lArmLife, setLarmLife] = React.useState(lifeInfo.lArm);
  // const [rLegLife, setRlegLife] = React.useState(lifeInfo.rLeg);
  // const [lLegLife, setLlegLife] = React.useState(lifeInfo.lLeg);