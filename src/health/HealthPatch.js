import React from "react";

var generalHealth;
var healthChangeEvent;

var totalDmgUpdater;
var totalDmg;

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

    const [totalDmgS, setTotalDmg] = React.useState(0);

    function healthChangeEvento(){
        
        console.log("direitosIguais" );
         totalDmg = headDmg + torsoDmg + rArmDmg + lArmDmg + rLegDmg + lLegDmg;
         setTotalDmg(totalDmg); 
         console.log("vai vai carai!");
    
    }
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
            <div>
                <label>Head</label>
                <label >{headDmg}</label>
                <button onClick={() => {setHeadDmg(headDmg + 1); healthChangeEvento()}} onChange={healthChangeEvento} >+</button>
                <button onClick={() => {setHeadDmg(headDmg - 1); healthChangeEvento()}}>-</button>
            </div>
            <div>
                <label>Torso</label>
                <label>{torsoDmg}</label>
                <button onClick={() => {setTorsoDmg(torsoDmg +1); healthChangeEvento()}}>+</button>
                <button onClick={() => {setTorsoDmg(torsoDmg -1); healthChangeEvento()}}>-</button>
            </div>
            <div>
                <label>R.Arm</label>
                <label>{rArmDmg}</label>
                <button onClick={() => {setRarmDmg(rArmDmg +1); healthChangeEvento()}}>+</button>
                <button onClick={() => {setRarmDmg(rArmDmg -1); healthChangeEvento()}}>-</button>
            </div>
            <div>
                <label>L.Arm</label>
                <label>{lArmDmg}</label>
                <button onClick={() => {setLarmDmg(lArmDmg +1); healthChangeEvento()}}>+</button>
                <button onClick={() => {setLarmDmg(lArmDmg -1); healthChangeEvento()}}>-</button>
            </div>
            <div>
                <label>R.Leg</label>
                <label>{rLegDmg}</label>
                <button onClick={() => {setRlegDmg(rLegDmg +1); healthChangeEvento()}}>+</button>
                <button onClick={() => {setRlegDmg(rLegDmg -1); healthChangeEvento()}}>-</button>
            </div>
            <div>
                <label>L.Leg</label>
                <label>{lLegDmg}</label>
                <button onClick={() => {setLlegDmg(lLegDmg +1); healthChangeEvento()}}>+</button>
                <button onClick={() => {setLlegDmg(lLegDmg -1); healthChangeEvento()}}>-</button>
            </div>
        </div>
    );
} 

