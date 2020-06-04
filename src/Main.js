import React from "react";
import "./Main.css";
import { GeneralHealth } from "./health/HealthPatch";
import { GeneralStats } from "./Stats/StatsPath";

var lifeInfo;

export function toggleMenu() {
  document
    .getElementsByClassName("Header__MenuBlock")[0]
    .classList.toggle("big");
}

export function GeneralRender(props) {
  lifeInfo = props.lifeInfo;
  var statsInfo = props.statsInfo;

  //---------health data----------
  const [woundStat, setWound] = React.useState(lifeInfo.wound);
  const [stunStat, setStun] = React.useState(lifeInfo.stunSituation);

  const [headDmg, setHeadDmg] = React.useState(lifeInfo.head);
  const [torsoDmg, setTorsoDmg] = React.useState(lifeInfo.torso);
  const [rArmDmg, setRarmDmg] = React.useState(lifeInfo.rArm);
  const [lArmDmg, setLarmDmg] = React.useState(lifeInfo.lArm);
  const [rLegDmg, setRlegDmg] = React.useState(lifeInfo.rLeg);
  const [lLegDmg, setLlegDmg] = React.useState(lifeInfo.lLeg);

//----------stats data ------------
  const [intStat, setInt] = React.useState(statsInfo.int);
  const [refBaseStat, setRefBase] = React.useState(statsInfo.refBase);
  const [refInstStat, setRefInst] = React.useState(statsInfo.refInst);
  const [techStat, setTech] = React.useState(statsInfo.tech);
  const [coolStat, setCool] = React.useState(statsInfo.cool);
  const [attrStat, setAttr] = React.useState(statsInfo.attr);
  const [luckStat, setLuck] = React.useState(statsInfo.luck);
  const [MAStat, setMA] = React.useState(statsInfo.MA);
  const [bodyStat, setBody] = React.useState(statsInfo.body);
  const [EmpBaseStat, setEmpBase] = React.useState(statsInfo.EmpBase);
  const [EmpInstStat, setEmpInst] = React.useState(statsInfo.EmpInst);

  return (
    <div>
      <div class="statBlock">
        <GeneralStats 
          intStat={intStat}
          setInt={setInt}
          refBaseStat={refBaseStat}
          setRefBase={setRefBase}
          refInstStat={refInstStat}
          setRefInst={setRefInst}
          techStat={techStat}
          setTech={setTech}
          coolStat={coolStat}
          setCool={setCool}
          attrStat={attrStat}
          setAttr={setAttr}
          luckStat={luckStat}
          setLuck={setLuck}
          MAStat={MAStat}
          setMA={setMA}
          bodyStat={bodyStat}
          setBody={setBody}
          EmpBaseStat={EmpBaseStat}
          setEmpBase={setEmpBase}
          EmpInstStat={EmpInstStat}
          setEmpInst={setEmpInst}
        />
      </div>
      <div class="healthBlock">
        <GeneralHealth
          //big object life data
          lifeInfo={lifeInfo} 
          //situation states
          stunStat={stunStat}
          setStun={setStun}
          woundStat={woundStat}
          setWound={setWound}
          //damage states
          headDmg={headDmg}
          setHeadDmg={setHeadDmg}
          torsoDmg={torsoDmg}
          setTorsoDmg={setTorsoDmg}
          rArmDmg={rArmDmg}
          setRarmDmg={setRarmDmg}
          lArmDmg={lArmDmg}
          setLarmDmg={setLarmDmg}
          rLegDmg={rLegDmg}
          setRlegDmg={setRlegDmg}
          lLegDmg={lLegDmg}
          setLlegDmg={setLlegDmg}
          //stats states
          bodyStat={bodyStat}
        />
      </div>
    </div>
  );
}
