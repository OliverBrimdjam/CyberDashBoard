import styled from 'styled-components';

import frameSet from '../../../assets/frames/frameSet2.png';

export const SilhouetteGeneralContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 320px;

  background: url(${frameSet}) no-repeat center;
  background-size: auto;
`;

export const SilhouetteHighContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto;

  width: 100%;
  height: 10rem;
`;

export const SilhouetteMidContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto;

  width: 100%;
  height: 10rem;
`;

export const SilhouetteLowContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto auto;
  grid-template-rows: auto auto auto;

  width: 100%;
  height: 10rem;
`;

export const SilhouetteHead = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  display: flex;
  justify-content: center;

  img {
    width: 2rem;
  }
`;

export const SilhouetteLArm = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
  /* background-color: blue; */
  img {
    width: 2rem;
  }
`;

export const SilhouetteRArm = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  /* background-color: red; */
  img {
    width: 2rem;
  }
`;

export const SilhouetteTorso = styled.div`
  display: flex;
  justify-content: center;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  img {
    width: 2rem;
  }
`;

export const SilhouetteLLeg = styled.div`
  display: flex;
  justify-content: flex-start;
  grid-column-start: 6;
  grid-column-end: 7;
  grid-row-start: 2;
  grid-row-end: 3;
  /* background-color: blue; */
  img {
    width: 2rem;
  }
`;

export const SilhouetteRLeg = styled.div`
  display: flex;
  justify-content: flex-end;
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
  /* background-color: red; */
  img {
    width: 2rem;
  }
`;
