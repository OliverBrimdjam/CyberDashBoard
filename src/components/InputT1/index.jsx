import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';

const InputT1 = ({ placeHolder, type }) => {
  return (
    <div className="inputContainer">
      <input
        type={type}
        className="inputContainer__input"
        placeholder={placeHolder}
      />
    </div>
  );
};

InputT1.propTypes = {
  placeHolder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default InputT1;
