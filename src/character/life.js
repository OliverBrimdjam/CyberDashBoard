import React, { Component } from "react";

var papoca;
var finalDmg;
var woundStatus;
var stunSituation;
var novoDano;
var damagePath = {
  totalDmg: 50,
  leftAdmg: 0,
  rightAdmg: 0,
  leftLdmg: 20,
  rightLdmg: 0
};

function btmApply(realDmg) {
  let finalDmg = realDmg - papoca.playerPath.btm;
  return finalDmg;
}

function AddDmg(dmg, splace) {
  damagePath.totalDmg += dmg;
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
  console.log(damagePath);
}

function resetDmg() {
  novoDano = 0;
}

export function Teste(props) {
  papoca = props;

  finalDmg = btmApply(papoca.playerPath.dmg);

  AddDmg(finalDmg, papoca.playerPath.bodyPlace);

  woundStatus = "normal";

  novoDano = damagePath.totalDmg;
  const [botabota, updateDmg] = React.useState(novoDano);

  // stunSituation = {
  //   stunAttr: 3,
  //   stunPenalty: 0,
  //   stunSpecialEffect: 1
  // };

  // var titicaca = () => {
  //   if (botabota === "sssss") {
  //     return "topz";
  //   } else {
  //     return "trapz";
  //   }
  // };damagePath.totalDmg

  return (
    <div>
      <p>{botabota}</p>
      <button onClick={() => updateDmg(novoDano)}>botão do carai</button>
      <button onClick={() => updateDmg(0)}>reset</button>
    </div>
  );
}
