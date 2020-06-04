import React from "react";
import './HealthPatch.css';


function DamageToWound(dmg) {
  const wounds = [
    "Light", 
    "Serius", 
    "Critical", 
    "Mortal", //need to redo this function to fix this lot of "Mortal"
    "Mortal",
    "Mortal",
    "Mortal",
    "Mortal",
    "Mortal",
    "Mortal"
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
  const { stunStat, setStun, woundStat, setWound, bodyStat } = props;

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


  let btm = 0;
  let btmLabel = "";

  if (bodyStat <= 2){
      btm = 0;
      btmLabel = "Very Weak";
  }else if (bodyStat >= 3 && bodyStat <= 4){
      btm = -1;
      btmLabel = "Weak";
  }else if (bodyStat >= 5 && bodyStat <= 7){
    btm = -2;
    btmLabel = "Average";
  }else if (bodyStat >= 8 && bodyStat <= 9){
    btm = -3;
    btmLabel = "Strong";
  }else if (bodyStat === 10){
    btm = -4;
    btmLabel = "Very Strong";
  }else{
    btm = -5;
    btmLabel = "Superhuman";
  }

    

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
      <div class="damageBlock">
        <div class="damageBlock__brick1">
          <label class="damageBlock__brick1__name">
            {labelName} 
          </label>
          <label class="damageBlock__brick1__value">
            {value}
          </label>
        </div>
        <div class="damageBlock__brick2">
          <button class="damageBlock__brick2__button" onClick={increase}>+</button>
          <button class="damageBlock__brick2__button" onClick={decrease}>-</button>
        </div>
      </div>
    );
  }

  return (
    <div id="healthContainer">
      <div class="panelStats">
        <div class="panelStats__block">
          <label class="panelStats__block__label">Wound</label>
          <label class="panelStats__block__value2">{woundStat}</label>
        </div>
        <div class="panelStats__block">
          <label class="panelStats__block__label">Stun</label>
          <label class="panelStats__block__value" >{stunStat}</label>
        </div>
        <div class="panelStats__block">
          <label class="panelStats__block__label">Total</label>
          <label class="panelStats__block__value">{totalDmgS}</label>
        </div>
        <div class="panelStats__block">
          <label class="panelStats__block__label">BTM</label>
          <label class="panelStats__block__value">{btm}</label>
        </div>
      </div>
      <div>
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
    </div>
  );
}
