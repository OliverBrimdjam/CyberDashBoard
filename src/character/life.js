import React, { Component } from "react";

export function Teste(props) {
  // const [playerPath] = this.props;

  let parodia = props.playerPath.bodyPlace;
  console.log(parodia);

  const [botabota, tiratira] = React.useState("sssss");
  var titicaca = () => {
    if (botabota == "sssss") {
      return "topz";
    } else {
      return "trapz";
    }
  };

  return (
    <div>
      <p>{botabota}</p>
      <button onClick={() => tiratira(parodia)}>botão do carai</button>
    </div>
  );
}
