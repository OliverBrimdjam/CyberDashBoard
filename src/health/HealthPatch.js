import React, { useEffect } from "react";
import './HealthPatch.css';


function DamageToWound(dmg) {
  
  const wounds = [
    "Light", 
    "Serius", 
    "Critical", 
    "Mortal", //need to redo this function to fix this a lot of "Mortal"
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

////////////////////////////////////////////////////////////////////////
export function GeneralHealth(props) {
  const { mainState, setMainState } = props;


  
  const totalDmgS = mainState.head + mainState.torso + mainState.rArm + mainState.lArm + mainState.rLeg + mainState.lLeg; // + outros


  let btm = 0;
  let btmLabel = "";

  if (mainState.bodyStat <= 2){
      btm = 0;
      btmLabel = "Very Weak";
  }else if (mainState.body >= 3 && mainState.body <= 4){
      btm = -1;
      btmLabel = "Weak";
  }else if (mainState.body >= 5 && mainState.body <= 7){
    btm = -2;
    btmLabel = "Average";
  }else if (mainState.body >= 8 && mainState.body <= 9){
    btm = -3;
    btmLabel = "Strong";
  }else if (mainState.body === 10){
    btm = -4;
    btmLabel = "Very Strong";
  }else{
    btm = -5;
    btmLabel = "Superhuman";
  }

    ////////////////////////////////////////////////////////////////////////

  function DamageRow({ labelName, value, setter}) {
    let fff= DamageToWound(totalDmgS);

    function increase() {
      setMainState(prevState => {
          return { 
              ...prevState,
              [setter]: value + 1,
              "stunNumber": fff.stun,
              "wound": fff.wound
              }
      });
    }
  
    function decrease() {
      setMainState(prevState => {
          return { 
            ...prevState,
            [setter]: value - 1,
            "stunNumber": fff.stun,
            "wound": fff.wound
          }
      });
    }



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
          <label class="panelStats__block__value2">{mainState.wound}</label>
        </div>
        <div class="panelStats__block">
          <label class="panelStats__block__label">Stun</label>
          <label class="panelStats__block__value" >{mainState.stunNumber}</label>
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
          value: mainState.head,
          setter: "head"
        })}

        {DamageRow({
          labelName: "Torso",
          value: mainState.torso,
          setter: "torso",
        })}

        {DamageRow({
          labelName: "R.Arm",
          value: mainState.rArm,
          setter: "rArm",
        })}

        {DamageRow({
          labelName: "L.Arm",
          value: mainState.lArm,
          setter: "lArm",
        })}

        {DamageRow({
          labelName: "R.Leg",
          value: mainState.rLeg,
          setter: "rLeg",
        })}

        {DamageRow({
          labelName: "L.Leg",
          value: mainState.lLeg,
          setter: "lLeg",
        })}
      </div>
    </div>
  );
}
