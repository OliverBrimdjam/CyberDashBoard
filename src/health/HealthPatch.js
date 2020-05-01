import React from "react";

function DamageRow({ labelName, value, setter }) {
  function increase() {
    setter(value + 1);
  }

  function decrease() {
    setter(value - 1);
  }

  return (
    <div>
      <label>
        {labelName} {value}
      </label>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

function DamageToWound(dmg) {
  // calculate status here
  return "your status";
}
export function GeneralHealth(props) {
  //situation states
  const { stunStat, setStun, woundLife, setWound } = props;

  //damage states
  const { headDmg, setHeadDmg } = props;

  const totalDmgS = headDmg; // + outros

  return (
    <div id="healthContainer">
      <div>
        <label>Wound Status: {DamageToWound(totalDmgS)}</label>
      </div>
      <div>
        <label>Total Dmg: {totalDmgS}</label>
      </div>

      {DamageRow({
        labelName: "Head",
        value: headDmg,
        setter: setHeadDmg,
      })}
    </div>
  );
}
