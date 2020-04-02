import React, { Component } from "react";

var lifeProps;
var finalDmg;
var woundStatus;
var stunSituation;
var novoDano;
var damagePath = {
  totalDmg: 0,
  leftAdmg: 0,
  rightAdmg: 0,
  leftLdmg: 0,
  rightLdmg: 0
};

function btmApply(realDmg) {
  let finalDmg = realDmg - lifeProps.lifePath.btm;
  return finalDmg;
}

function AddDmg(dmg, splace) {
  damagePath.totalDmg += dmg;
  console.log("este é o dano que chega via prop");
  console.log(damagePath.totalDmg);
  switch (splace) {
    case "l.arm":
      damagePath.leftAdmg += dmg;
      break;
    case "r.arm":
      damagePath.rightAdmg += dmg;
      break;
    case "l.leg":
      damagePath.leftLdmg += dmg;
      break;
    case "r.leg":
      damagePath.rightLdmg += dmg;
      break;
    case "head":
      damagePath.totalDmg += dmg;
      break;
    default:
  }
  console.log("final do registro de dano");
}

export function Teste(props) {
  lifeProps = props;

  const [botabota, renderDmg] = React.useState(novoDano);

  let setDmg = () => {
    finalDmg = btmApply(lifeProps.lifePath.dmg);
    AddDmg(finalDmg, lifeProps.lifePath.bodyPlace);
    renderDmg(damagePath.totalDmg);
  };

  let resetDmg = () => {
    damagePath = {
      totalDmg: 0,
      leftAdmg: 0,
      rightAdmg: 0,
      leftLdmg: 0,
      rightLdmg: 0
    };
    renderDmg(damagePath.totalDmg);
  };

  // AddDmg(finalDmg, lifeProps.lifePath.bodyPlace);
  console.log(damagePath);

  woundStatus = "normal";

  return (
    <div>
      <p>{botabota}</p>

      <button onClick={() => resetDmg()}>reset</button>
      <button onClick={() => setDmg()}>set damage</button>
    </div>
  );
}
