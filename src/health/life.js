import React from "react";

var lifeProps; //variable that receive the props from App.js
var finalDmg; //receive the damage value after being subtracted by BTM modifier
var novoDano; //initial value rendered by element

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

  return (
    <div>
      <p>{botabota}</p>
      <button onClick={() => resetDmg()}>reset</button>
      <button onClick={() => setDmg()}>set damage</button>
    </div>
  );
}
