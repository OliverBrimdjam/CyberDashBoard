import React, { useState } from 'react';
import MaleSilhouette from '../../components/BaseComponents/MaleSilhouette';
import RoundDisplay from '../../components/BaseComponents/RoundDisplay';
import Header from '../../components/CompositeComponents/Header';
import { CustomButtonBlue } from '../../components/CustomButtom';

const Dashboard = () => {
  const start = 0;
  const [testDisplay, setTestDisplay] = useState(start);

  return (
    <>
      <Header />
      <MaleSilhouette />
      <RoundDisplay value={testDisplay} setValue={setTestDisplay} />
      <CustomButtonBlue>+</CustomButtonBlue>
    </>
  );
};

export default Dashboard;
