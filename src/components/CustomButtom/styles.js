import styled from 'styled-components';

import purpleButton from '../../assets/buttons/button_2.png';
import blueButton from '../../assets/buttons/button_3.png';

export const ButtonContainerBlue = styled.div`
  --var-width: ${props => (props.size ? props.size : '120px')};

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 5px;
  width: var(--var-width);
  height: calc(0.41666666 * var(--var-width));

  background: url(${blueButton}) no-repeat center;
  background-size: 100% 100%;
`;

export const ButtonContainerPurple = styled.div`
  --var-width: ${props => (props.size ? props.size : '120px')};

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 5px;
  width: ${props => (props.size ? props.size : '120px')};
  height: calc(0.41666666 * var(--var-width));

  background: url(${purpleButton}) no-repeat center;
  background-size: 100% 100%;
`;

export const ButtonInput = styled.button`
  /* --var-width: ${props => (props.size ? props.size : '120px')}; */

  width: 100px;
  height: 30px;
  background: transparent;
  border: 0;
  color: #ffffff;

  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;

  font-family: 'goldman', sans-serif;
  font-size: 1rem;
  /* font-size: calc(0.133333333 * var(--var-width)); */
`;
