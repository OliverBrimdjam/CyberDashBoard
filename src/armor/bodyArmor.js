var shotProps;

//this info is taken from DB
var armorSP = {
  headSP: 7,
  torsoSP: 14,
  rArmSP: 14,
  lArmSP: 14,
  rLegSp: 10,
  lLegSp: 10,
};

export function BodyArmor(props) {
  //-----props model------//
  // shotProps = {
  //     shotDmg: 9,
  //     shotType: "standard",
  //     shotTarget: "l.leg"
  // }

  shotProps = props;

  const [botabota, renderDmg] = React.useState(novoDano);

  return (
    <div>
      <img src="/public/images/icones/human-icon.jpg" />
    </div>
  );
}
