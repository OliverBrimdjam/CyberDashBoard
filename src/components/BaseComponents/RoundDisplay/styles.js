import styled from 'styled-components';

import RoundFrame from '../../../assets/frames/cyberMolduraR.png';

const Display = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50px;
  background: url(${RoundFrame}) no-repeat center;
  background-size: contain;
`;

export default Display;
