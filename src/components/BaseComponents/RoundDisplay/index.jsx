import React from 'react';
import PropTypes from 'prop-types';
import { Display, DisplayContainer, Label } from './styles';
import { CustomButtonBlue, CustomButtonPurple } from '../../CustomButtom';

const RoundDisplay = props => {
  const { value, setValue, size, label, propKey } = props;

  console.log(value);
  console.log(propKey);
  console.log(value[propKey]);

  const add = () => {
    console.log('add');
    setValue(prevState => {
      return { ...prevState, [propKey]: value[propKey] + 1 };
    });
  };

  const sub = () => {
    setValue(prevState => {
      return { ...prevState, [propKey]: value[propKey] - 1 };
    });
    console.log('sub');
  };

  return (
    <DisplayContainer>
      <Label>{label}</Label>
      <Display size={size}>{value[propKey]}</Display>
      <div>
        <CustomButtonBlue size={size} operation={add}>
          +
        </CustomButtonBlue>
        <CustomButtonPurple size={size} operation={sub}>
          -
        </CustomButtonPurple>
      </div>
    </DisplayContainer>
  );
};

RoundDisplay.defaultProps = {
  value: PropTypes.object,
  size: PropTypes.string,
  setValue: PropTypes.func,
  label: PropTypes.string,
  propKey: PropTypes.string,
};

RoundDisplay.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  value: PropTypes.object,
  size: PropTypes.string,
  setValue: PropTypes.func,
  label: PropTypes.string,
  propKey: PropTypes.string,
};

export default RoundDisplay;
