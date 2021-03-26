import React from 'react';
import PropTypes from 'prop-types';
import {
  ButtonContainerBlue,
  ButtonContainerPurple,
  ButtonInput,
} from './styles';

export const CustomButtonBlue = ({ children }) => {
  return (
    <ButtonContainerBlue size="500px">
      <ButtonInput>{children}</ButtonInput>
    </ButtonContainerBlue>
  );
};

CustomButtonBlue.defaultProps = {
  children: null,
};

CustomButtonBlue.propTypes = {
  children: PropTypes.element,
};

export const CustomButtonPurple = ({ children }) => {
  return (
    <ButtonContainerPurple size="500px">
      <ButtonInput>{children}</ButtonInput>
    </ButtonContainerPurple>
  );
};

CustomButtonPurple.defaultProps = {
  children: null,
};

CustomButtonPurple.propTypes = {
  children: PropTypes.element,
};
