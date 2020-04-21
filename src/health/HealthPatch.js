import React from "react";

var generalHealth;
var woundSettler;
var lifeChanger;


export function GeneralHealth(props){
    generalHealth = props.lifeInfo;
    woundSettler = props.settler;
    lifeChanger = props.lifechanger;

    let toRender = props.render;

    console.log(generalHealth.lifeInfo.wound);

    

    return (
        <div>
            <label>Head</label>
            {/* <label>{generalHealth.lifeInfo.wound}</label> */}
            <button onClick={() => woundSettler("xBacon")}>que sanduiche será?</button>
            <br/>
            <label>head Life</label>
            <label>{toRender}</label>
            <button onClick={() => lifeChanger("head")}>+</button>
            <button onClick={() => lifeChanger("bobs")}>-</button>
        </div>
    );
} 

