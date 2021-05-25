// serie of RoundDisplay components with info about every stats

import React from 'react';
import RoundDisplay from '../../BaseComponents/RoundDisplay';
import { useData } from '../../../context/CharData';

const packBuilder = ({ labelString, propKey }) => {
  const { data, setData } = useData();
  return (
    <RoundDisplay
      value={data}
      setValue={setData}
      label={labelString}
      size="30px"
      propKey={propKey}
    />
  );
};

const StatsPack = () => {
  const statsArray = [
    {
      labelString: 'INT',
      propKey: 'int',
    },
    {
      labelString: 'REFb',
      propKey: 'refBase',
    },
    {
      labelString: 'REFi',
      propKey: 'refInst',
    },
    {
      labelString: 'TECH',
      propKey: 'tech',
    },
  ];
  return <div>{statsArray.map(packBuilder)}</div>;
};

export default StatsPack;

//----------------
