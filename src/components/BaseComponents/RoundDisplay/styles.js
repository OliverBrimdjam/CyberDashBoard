import styled from 'styled-components';

import RoundFrame from '../../../assets/frames/cyberMolduraR.png';

export const DisplayContainer = styled.div`
  display: flex;
  flex-direction: row;

  border: 1px solid black;
  width: fit-content;
`;

export const Display = styled.div`
  --var-width: ${props => (props.size ? props.size : '120px')};

  display: flex;
  justify-content: center;
  align-items: center;

  width: calc(var(--var-width) * 2);
  font-family: 'Play', sans-serif;

  background: url(${RoundFrame}) no-repeat center;
  background-size: contain;
`;

export const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 5%;

  font-family: 'Orbitron', sans-serif;
`;
