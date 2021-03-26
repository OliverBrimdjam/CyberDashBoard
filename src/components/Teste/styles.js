import styled from 'styled-components';
import textura from '../../assets/texturas/aço_1.jpg';

export const Container = styled.div`
  height: 50vh;
  width: 300px;
  display: flex;
  background: url(${textura}) no-repeat center;
`;

export const Button = styled.button`
  height: 50px;
  width: 70px;
`;
