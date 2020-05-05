import React from "react";

function DamageToWound(dmg) {
  // calculate status here

  const wounds = [
    "Light", 
    "Serius", 
    "Critical", 
    "Mortal 0", 
    "Mortal 1",
    "Mortal 2",
    "Mortal 3",
    "Mortal 4",
    "Mortal 5",
    "Mortal 6"
  ];

  const stuns = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];

  let dmgConstant = 0;
  let wound_stun;

  if (dmg === 0){
    wound_stun = {
      wound: "normal",
      stun: stuns[0]
    }
  }else{
    let dmgModulus = (dmg % 4);
    if (dmgModulus === 0){
      
      dmgConstant = (dmg/4)-1;
      if (dmgConstant<0){ dmgConstant = 0;}
    }else{
      
      dmgConstant = parseInt(dmg/4);
    }
    
    wound_stun = {
      wound: wounds[dmgConstant],
      stun: stuns[dmgConstant]
    }
  }
  
  return wound_stun;
}
export function GeneralHealth(props) {
  //situation states
  const { stunStat, setStun, woundStat, setWound } = props;

  //damage states
  const { 
    headDmg, 
    setHeadDmg, 
    torsoDmg, 
    setTorsoDmg, 
    rArmDmg, 
    setRarmDmg, 
    lArmDmg, 
    setLarmDmg,
    rLegDmg,
    setRlegDmg,
    lLegDmg,
    setLlegDmg
  } = props;

  const totalDmgS = headDmg + torsoDmg + rArmDmg + lArmDmg + rLegDmg + lLegDmg; // + outros

  function DamageRow({ labelName, value, setter}) {

    let fff= DamageToWound(totalDmgS);

    function increase() {
      setter(value + 1);
    }
  
    function decrease() {
      setter(value - 1);
    }
  
    setWound(fff.wound);
    setStun(fff.stun);

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

  return (
    <div id="healthContainer">
      <div>
        <label>Wound Status: {woundStat}</label>
      </div>
      <div>
        <label>Stun Status: {stunStat}</label>
      </div>
      <div>
        <label>Total Dmg: {totalDmgS}</label>
      </div>

      {DamageRow({
        labelName: "Head",
        value: headDmg,
        setter: setHeadDmg,
      })}

      {DamageRow({
        labelName: "Torso",
        value: torsoDmg,
        setter: setTorsoDmg,
      })}

      {DamageRow({
        labelName: "R.Arm",
        value: rArmDmg,
        setter: setRarmDmg,
      })}

      {DamageRow({
        labelName: "L.Arm",
        value: lArmDmg,
        setter: setLarmDmg,
      })}

      {DamageRow({
        labelName: "R.Leg",
        value: rLegDmg,
        setter: setRlegDmg,
      })}

      {DamageRow({
        labelName: "L.Leg",
        value: lLegDmg,
        setter: setLlegDmg,
      })}


    </div>
  );
}
