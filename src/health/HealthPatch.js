import React from "react";

// function DamageRow({ labelName, value, setter}) {
//   function increase() {
//     setter(value + 1);
//   }

//   function decrease() {
//     setter(value - 1);
//   }

//   return (
//     <div>
//       <label>
//         {labelName} {value}
//       </label>
//       <button onClick={increase}>+</button>
//       <button onClick={decrease}>-</button>
//     </div>
//   );
// }

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
  ]

  const stuns = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]

  let dmgConstant;
  let wound_stun;

  if (dmg === 0){
    wound_stun = {
      wound: wounds[0],
      stun: stuns[0]
    }
  }else{
    
    if ((dmg % 4) === 0){
      
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
  debugger;
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

    let fff;
    function increase() {
      setter(value + 1);
      fff = DamageToWound(totalDmgS);

      console.log(fff.stun);

      setWound(fff.wound);
      setStun(fff.stun);
    }
  
    function decrease() {
      setter(value - 1);
      fff = DamageToWound(totalDmgS);

      setWound(fff.wound);
      setStun(fff.stun);
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

  return (
    <div id="healthContainer">
      <div>
        <label>Wound Status: {woundStat}</label> <br/>
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
