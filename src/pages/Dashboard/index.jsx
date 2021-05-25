import React, { useState } from 'react';
import MaleSilhouette from '../../components/BaseComponents/MaleSilhouette';
import RoundDisplay from '../../components/BaseComponents/RoundDisplay';
import Header from '../../components/CompositeComponents/Header';
import CharDataProvider from '../../context/CharData';
import StatsPack from '../../components/CompositeComponents/StatsPack';
import mainState from '../../models/repository';

const Dashboard = () => {
  const [mainValues, setMainValues] = useState(mainState);

  return (
    <CharDataProvider>
      <Header />
      <StatsPack />
      <MaleSilhouette />
      <RoundDisplay
        value={mainValues}
        setValue={setMainValues}
        label="INT"
        size="30px"
        propKey="int"
      />
    </CharDataProvider>
  );
};

export default Dashboard;
