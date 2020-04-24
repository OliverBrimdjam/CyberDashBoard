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
                <label>{generalHealth.lifeInfo.wound}</label>
                <button onClick={() => setWound("varvarvar")}>change status</button>
            </div>
            <div>
                <label>Head</label>
                <label>{generalHealth.lifeInfo.wound}</label>
                <button onClick={() => setWound("varvarvar")}>change status</button>
            </div>
            <div>
                <label>Torso</label>
                <label>{generalHealth.lifeInfo.wound}</label>
                <button onClick={() => setWound("varvarvar")}>change status</button>
            </div>

        </div>
    );
} 

