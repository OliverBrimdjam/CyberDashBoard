import React, { useState } from 'react';
import MaleSilhouette from '../../components/BaseComponents/MaleSilhouette';
import RoundDisplay from '../../components/BaseComponents/RoundDisplay';
import Header from '../../components/CompositeComponents/Header';

const Dashboard = () => {
  const start = 0;
  const [testDisplay, setTestDisplay] = useState(start);

  return (
    <>
      <Header />
      <MaleSilhouette />
      <RoundDisplay value={testDisplay} setValue={setTestDisplay} size="30px" />
    </>
  );
};

export default Dashboard;
