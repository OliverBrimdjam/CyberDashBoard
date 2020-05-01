import React from "react";

var healthChangeEvent;

//situation states
var stunStat;
var setStun;
var woundLife;
var setWound;

//damage states
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

export function GeneralHealth(props) {
  //situation states
  stunStat = props.stunStat;
  setStun = props.setStun;
  woundLife = props.woundLife;
  setWound = props.setWound;

  //damage states
  let { headDmg, setHeadDmg } = props;

  const totalDmgS = headDmg; // + outros

  return (
    <div id="healthContainer" onChange={healthChangeEvent}>
      <div>
        <label>Wound Status</label>
        <label>{woundLife}</label>
        <button onClick={() => setWound("varvarvar")}>change status</button>
      </div>
      <div>
        <label>Total Dmg</label>
        <label>{totalDmgS}</label>
      </div>

      {DamageRow({
        labelName: "Head",
        value: headDmg,
        setter: setHeadDmg,
      })}
    </div>
  );
}
