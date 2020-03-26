import React, { Component } from "react";

// model of object lifepack---------------------
// var lifePath = {
//     charID: { this.props.charID },
//     saveNum: { this.props.save },
//     btm: { this.props.btm },
//     damage: { this.props.damage },
//     stun: { this.props.stun },
//     damageUpdate: { this.props.damageUpdate }
// }


function LifeUpdate(props) {
    var lifePath = { //this is a wrong strategy because props can't be changed....you need to use state.
        damage: { this.props.damage },
        damageUpdate: { this.props.damageUpdate }
    }

    let updatedLife = lifePath.damage + lifePath.damageUpdate;
    lifePath.damage = updatedLife;
    lifePath.damageUpdate = 0;

    return (updatedLife);
}

function HealthCheck(props) 