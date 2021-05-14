import React from 'react';
import { Link } from 'react-router-dom';

import {
  SilhouetteGeneralContainer,
  SilhouetteHighContainer,
  SilhouetteMidContainer,
  SilhouetteLowContainer,
  SilhouetteHead,
  SilhouetteLArm,
  SilhouetteRArm,
  SilhouetteTorso,
  SilhouetteLLeg,
  SilhouetteRLeg,
} from './styles';

import cyberMolduraRL from '../../../assets/frames/cyberMolduraRL.png';

const MaleSilhouette = () => {
  return (
    <SilhouetteGeneralContainer>
      <SilhouetteHighContainer>
        <SilhouetteHead>
          <Link to="/">
            <img src={cyberMolduraRL} alt="head" />
          </Link>
        </SilhouetteHead>
      </SilhouetteHighContainer>
      <SilhouetteMidContainer>
        <SilhouetteRArm>
          <Link to="/">
            <img src={cyberMolduraRL} alt="head" />
          </Link>
        </SilhouetteRArm>
        <SilhouetteTorso>
          <Link to="/">
            <img src={cyberMolduraRL} alt="head" />
          </Link>
        </SilhouetteTorso>
        <SilhouetteLArm>
          <Link to="/">
            <img src={cyberMolduraRL} alt="head" />
          </Link>
        </SilhouetteLArm>
      </SilhouetteMidContainer>
      <SilhouetteLowContainer>
        <SilhouetteRLeg>
          <Link to="/">
            <img src={cyberMolduraRL} alt="head" />
          </Link>
        </SilhouetteRLeg>
        <SilhouetteLLeg>
          <Link to="/">
            <img src={cyberMolduraRL} alt="head" />
          </Link>
        </SilhouetteLLeg>
      </SilhouetteLowContainer>
    </SilhouetteGeneralContainer>
  );
};

export default MaleSilhouette;
