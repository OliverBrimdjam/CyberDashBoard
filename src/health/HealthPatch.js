import React from "react";

var generalHealth;

//situation states
var stunStat;
var setStun;
var woundLife;
var setWound;

//damage states
var headDmg;
var setHeadDmg;
var torsoDmg;
var setTorsoDmg;
var rArmDmg;
var setRarmDmg;
var lArmDmg;
var setLarmDmg;
var rLegDmg;
var setRlegDmg;
var lLegDmg;
var setLlegDmg;

totalDmgUpdater = event => {
    
}


export function GeneralHealth(props){
    generalHealth = props.lifeInfo;
    
    //situation states
    stunStat = props.stunStat;
    setStun = props.setStun;
    woundLife = props.woundLife;
    setWound = props.setWound;

    //damage states
    headDmg = props.headDmg;
    setHeadDmg = props.setHeadDmg;
    torsoDmg = props.torsoDmg;
    setTorsoDmg = props.setTorsoDmg;
    rArmDmg = props.rArmDmg;
    setRarmDmg = props.setRarmDmg;
    lArmDmg = props.lArmDmg;
    setLarmDmg = props.setLarmDmg;
    rLegDmg = props.rLegDmg;
    setRlegDmg = props.setRlegDmg;
    lLegDmg = props.lLegDmg;
    setLlegDmg = props.setLlegDmg;

    return (
        <div>
            <div>
                <label>Wound Status</label>
                {/* <label>{generalHealth.lifeInfo.wound}</label> */}
                <label>{woundLife}</label>
                <button onClick={() => setWound("varvarvar")}>change status</button>
            </div>
            <div>
                <label>Total Dmg</label>
                <label>{totalDmg}</label>
            </div>
            <div>
                <label>Head</label>
                <label>{headDmg}</label>
                <button onClick={() => setHeadDmg(headDmg + 1)}>+</button>
                <button onClick={() => setHeadDmg(headDmg - 1)}>-</button>
            </div>
            <div>
                <label>Torso</label>
                <label>{torsoDmg}</label>
                <button onClick={() => setTorsoDmg(3)}>change status</button>
                <button onClick={() => setTorsoDmg(torsoDmg +1)}>+</button>
                <button onClick={() => setTorsoDmg(torsoDmg -1)}>-</button>
            </div>
            <div>
                <label>R.Arm</label>
                <label>{rArmDmg}</label>
                <button onClick={() => setRarmDmg(4)}>change status</button>
                <button onClick={() => setRarmDmg(rArmDmg +1)}>+</button>
                <button onClick={() => setRarmDmg(rArmDmg -1)}>-</button>
            </div>
            <div>
                <label>L.Arm</label>
                <label>{lArmDmg}</label>
                <button onClick={() => setLarmDmg(5)}>change status</button>
                <button onClick={() => setLarmDmg(lArmDmg +1)}>+</button>
                <button onClick={() => setLarmDmg(lArmDmg -1)}>-</button>
            </div>
            <div>
                <label>R.Leg</label>
                <label>{rLegDmg}</label>
                <button onClick={() => setRlegDmg(5)}>change status</button>
                <button onClick={() => setRlegDmg(rLegDmg +1)}>+</button>
                <button onClick={() => setRlegDmg(rLegDmg -1)}>-</button>
            </div>
            <div>
                <label>L.Leg</label>
                <label>{lLegDmg}</label>
                <button onClick={() => setLlegDmg(5)}>change status</button>
                <button onClick={() => setLlegDmg(lLegDmg +1)}>+</button>
                <button onClick={() => setLlegDmg(lLegDmg -1)}>-</button>
            </div>
        </div>
    );
} 

