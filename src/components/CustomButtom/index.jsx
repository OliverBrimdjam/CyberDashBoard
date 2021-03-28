import React from 'react';
import PropTypes from 'prop-types';
import {
  ButtonContainerBlue,
  ButtonContainerPurple,
  ButtonInput,
} from './styles';

export const CustomButtonBlue = props => {
  const { size, children } = props;

  return (
    <ButtonContainerBlue size={size}>
      <ButtonInput size={size}>{children}</ButtonInput>
    </ButtonContainerBlue>
  );
};

CustomButtonBlue.defaultProps = {
  children: null,
  size: null,
};

CustomButtonBlue.propTypes = {
  children: PropTypes.element,
  size: PropTypes.string,
};

export const CustomButtonPurple = props => {
  const { size, children } = props;

  return (
    <ButtonContainerPurple size={size}>
      <ButtonInput size={size}>{children}</ButtonInput>
    </ButtonContainerPurple>
  );
};

CustomButtonPurple.defaultProps = {
  children: null,
  size: null,
};

CustomButtonBlue.propTypes = {
  children: PropTypes.element,
  size: PropTypes.string,
};
