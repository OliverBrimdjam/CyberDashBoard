import React from "react";
import "./StatsPath.css";

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

        
        return(
            <div class="statsBlock">
                <div class="statsBlock__brick1">
                    <label class="statsBlock__brick1__name">{ labelName }</label>
                    <label class="statsBlock__brick1__value">{value}</label>
                </div>
                <div class="statsBlock__brick2">
                    <button class="statsBlock__brick2__button" onClick={increase}>+</button>
                    <button class="statsBlock__brick2__button" onClick={decrease}>-</button>
                </div>
            </div>
        );
    }

    return(

        <div id="statsContainter">
            <div>
                <label>Stats</label>
            </div>
            <div>
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
                labelName: "EMP b",
                value: EmpBaseStat,
                setter: setEmpBase
            })}
            {StatRow({
                labelName: "EMP i",
                value: EmpInstStat,
                setter: setEmpInst
            })}
            </div>
            
        </div>
    );
}