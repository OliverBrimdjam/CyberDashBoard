import React from "react";
import "./StatsPatch.css";

export function GeneralStats(props){

    const { mainState, setMainState } = props;

    function StatRow({labelName, value, setter}){

        function increase () {
            setMainState(prevState => {
                return {...prevState, [setter]: value + 1 }
            });
        }
        function decrease (){
            setMainState(prevState => {
                return {...prevState, [setter]: value - 1}
            });
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
                value: mainState.int,
                setter: "int"
            })}
            {StatRow({
                labelName: "REF b",
                value: mainState.refBase,
                setter: "refBase"
            })}
            {StatRow({
                labelName: "REF i",
                value: mainState.refInst,
                setter: "refInst"
            })}
            {StatRow({
                labelName: "TECH",
                value: mainState.tech,
                setter: "tech"
            })}
            {StatRow({
                labelName: "COOL",
                value: mainState.cool,
                setter: "cool"
            })}
            {StatRow({
                labelName: "ATTR",
                value: mainState.attr,
                setter: "attr"
            })}
            {StatRow({
                labelName: "LUCK",
                value: mainState.luck,
                setter: "luck"
            })}
            {StatRow({
                labelName: "MA",
                value: mainState.MA,
                setter: "MA"
            })}
            {StatRow({
                labelName: "BODY",
                value: mainState.body,
                setter: "body"
            })}
            {StatRow({
                labelName: "EMP b",
                value: mainState.EmpBase,
                setter: "EmpBase"
            })}
            {StatRow({
                labelName: "EMP i",
                value: mainState.EmpInst,
                setter: "EmpInst"
            })}
            </div>
            
        </div>
    );
}