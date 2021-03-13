/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';

export const ButtonBlue = ({ children }) => {
  return (
    <div className="buttonContainer2">
      <button type="submit" className="confirm">
        {children}
      </button>
    </div>
  );
};

ButtonBlue.defaultProps = {
  children: null,
};

ButtonBlue.propTypes = {
  children: PropTypes.element,
};

export const ButtonPurple = ({ children }) => {
  return (
    <div className="buttonContainer">
      <button type="submit" className="confirm">
        {children}
      </button>
    </div>
  );
};

ButtonPurple.defaultProps = {
  children: null,
};

ButtonPurple.propTypes = {
  children: PropTypes.element,
};
