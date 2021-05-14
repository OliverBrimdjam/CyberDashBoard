import React from 'react';
import PropTypes from 'prop-types';
import {
  ButtonContainerBlue,
  ButtonContainerPurple,
  ButtonInput,
} from './styles';

export const CustomButtonBlue = props => {
  const { size, children, operation } = props;

  return (
    <ButtonContainerBlue onClick={operation} size={size}>
      <ButtonInput size={size}>{children}</ButtonInput>
    </ButtonContainerBlue>
  );
};

CustomButtonBlue.defaultProps = {
  children: null,
  size: null,
  operation: null,
};

CustomButtonBlue.propTypes = {
  children: PropTypes.element,
  size: PropTypes.string,
  operation: PropTypes.func,
};

export const CustomButtonPurple = props => {
  // eslint-disable-next-line react/prop-types
  const { size, children, operation } = props;

  return (
    <ButtonContainerPurple onClick={operation} size={size}>
      <ButtonInput size={size}>{children}</ButtonInput>
    </ButtonContainerPurple>
  );
};

CustomButtonPurple.defaultProps = {
  children: null,
  size: null,
  operation: null,
};

CustomButtonBlue.propTypes = {
  children: PropTypes.element,
  size: PropTypes.string,
  operation: PropTypes.func,
};
