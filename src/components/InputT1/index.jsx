import React from 'react';
import './styles.css';

interface propInput {
  type: 'string',
  placeHolder: 'string'
}

const InputT1 = ({ placeHolder, type }) => {
  // const { placeHolder, type } = props;

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

export default InputT1;
