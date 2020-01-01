function rollDice(sides) {
    let diceResult = Math.floor(Math.random() * sides) + 1;
    return (diceResult);
}

function criticalSucess(){
    let diceResult = Math.floor(Math.random() * sides) + 11;
    return (diceResult);
}

function bodyPartHit(diceValue) {
    let bodyparthitted;

    switch (diceValue){
        case 1:
            bodyparthitted = "Head";
            break;

        case 2 || 3 || 4:
            bodyparthitted = "Torso";
            break;

        case 5:
            bodyparthitted = "R.Arm";
            break;

        case 6:
            bodyparthitted = "L.Arm";
            break;

        case 7 || 8:
            bodyparthitted = "R.Leg";
            break;

        case 9 || 0:
            bodyparthitted = "L.Leg";
        }

    return (bodyparthitted);   
}
//internal use function///need receive a string with parameter to work
function distanceWeapon(typeWeapon){
    switch (typeWeapon){
        case "rif":
            distStd = 400;
            break;

        case "sho":
            distStd = 50;
            break;

        case "sub":
            distStd = 150;
            break;

        case "han":
            distStd = 50;
        }
        return (distStd);
}
//internal use function
function shotCD (shotMod){
    if (shotMod>1 && shotMod<=2){
        shotDificult = 30;

    }else if (shotMod>0.5 && shotMod<=1){
        shotDificult = 25;

    }else if (shotMod>0.25 && shotMod<=0.5){
        shotDificult = 20;

    }else {
        shotDificult = 15;
    }
    return (shotDificult);
}

function weaponRangeModifier (typeWeapon, distanceShot) {
    let distStd = distanceWeapon(typeWeapon);
    let distShot = distanceShot;
    let shotMod;
    let shotDificult;
    
    if (distShot<=1){
        shotDificult = 10;
    }else{
        shotMod = distShot/distStd;
        shotDificult = shotCD(shotMod);
    }
    return (shotDificult);    
}

function attackValue(rollValue, refStat, weapSkill){
    let attackValue = rollValue + refStat + weapSkill;
    return (attackValue);
}
//Main Function to simple attack---------------------------------------------------------------------
function rangAttSimpleShot(refStat, weapSkill, typeWeapon, distanceShot, weapReliability){
    let shotDificult = weaponRangeModifier(typeWeapon, distanceShot);
    let rollValue = rollDice(10);
    let attackValue;
    let resultAttk;
    //need to create a function that search all extra modifiers like movement, covering and more...

    if (rollValue === 10){
        rollValue = criticalSucess();
    }else if (rollValue === 1){
        //need to create a function fo manage fumbles "fumbles()"
    }else{
        attackValue = attackValue(rollValue, refStat, weapSkill);//i don't now if is realy need to use a function to it

        if (attackValue >= shotDificult) {
            resultAttk = 1;
        }else{
            resultAttk = 0;
        }
    return (resultAttk);

    }
}
