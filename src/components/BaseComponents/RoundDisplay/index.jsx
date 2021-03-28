import React from 'react';
import PropTypes from 'prop-types';
import Display from './styles';
import { CustomButtonBlue, CustomButtonPurple } from '../../CustomButtom';

const RoundDisplay = props => {
  const { value, setValue, size } = props;

  const add = () => {
    setValue(value + 1);
  };

  const sub = () => {
    setValue(value - 1);
  };

  return (
    <div>
      <Display>{value}</Display>
      <div>
        <CustomButtonBlue onClick={add} size={size}>
          +
        </CustomButtonBlue>
        <CustomButtonPurple onClick={sub} size={size}>
          -
        </CustomButtonPurple>
      </div>
    </div>
  );
};

RoundDisplay.defaultProps = {
  value: PropTypes.number,
  size: PropTypes.string,
  setValue: PropTypes.func,
};

RoundDisplay.propTypes = {
  value: PropTypes.number,
  size: PropTypes.string,
  setValue: PropTypes.func,
};

export default RoundDisplay;
