import React from 'react';
import PropTypes from 'prop-types';
import { ButtonBlue, ButtonPurple } from '../../ButtonT1';
import Display from './styles';

const RoundDisplay = props => {
  const { value } = props;

  return (
    <div>
      <Display>{value}</Display>
      <div>
        <ButtonBlue>+</ButtonBlue>
        <ButtonPurple>-</ButtonPurple>
      </div>
    </div>
  );
};

RoundDisplay.defaultProps = {
  value: PropTypes.number,
};

RoundDisplay.propTypes = {
  value: PropTypes.number,
};

export default RoundDisplay;
