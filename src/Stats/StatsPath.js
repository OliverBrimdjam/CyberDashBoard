import React from "react";

export function GeneralStats(props){

    const {
        intStat,
        setInt,
        refBaseStat,
        setRefBase,
        refInstStat,
        setRefInst,
        techStat,
        setTech,
        coolStat,
        setCool,
        attrStat,
        setAttr,
        luckStat,
        setLuck,
        MAStat,
        setMA,
        bodyStat,
        setBody,
        EmpBaseStat,
        setEmpBase,
        EmpInstStat,
        setEmpInst
    } = props;

    function StatRow({labelName, value, setter}){

        const increase = () => {
            setter(value + 1);
        }

        const decrease = () => {
            setter(value - 1);
        }

        console.log("carregou a cell")
        return(
            <div>
                <label>{ labelName }</label>
                <label>{value}</label>
                <button onClick={increase} >+</button>
                <button onClick={decrease} >-</button>
            </div>
        );
    }
    
    console.log("carregou o stat completo")

    return(

        <div id="statsContainter">
            <label>Stats</label>
            {StatRow({
                labelName: "INT",
                value: intStat,
                setter: setInt
            })}
            {StatRow({
                labelName: "REF b",
                value: refBaseStat,
                setter: setRefBase
            })}
            {StatRow({
                labelName: "REF i",
                value: refInstStat,
                setter: setRefInst
            })}
            {StatRow({
                labelName: "TECH",
                value: techStat,
                setter: setTech
            })}
            {StatRow({
                labelName: "COOL",
                value: coolStat,
                setter: setCool
            })}
            {StatRow({
                labelName: "ATTR",
                value: attrStat,
                setter: setAttr
            })}
            {StatRow({
                labelName: "LUCK",
                value: luckStat,
                setter: setLuck
            })}
            {StatRow({
                labelName: "MA",
                value: MAStat,
                setter: setMA
            })}
            {StatRow({
                labelName: "BODY",
                value: bodyStat,
                setter: setBody
            })}
            {StatRow({
                labelName: "EMP B",
                value: EmpBaseStat,
                setter: setEmpBase
            })}
            {StatRow({
                labelName: "EMP I",
                value: EmpInstStat,
                setter: setEmpInst
            })}

            
        </div>
    );
}