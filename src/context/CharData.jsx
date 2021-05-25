import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import mainStats from '../models/repository';

export const CharDataContext = createContext();

export default function CharDataProvider({ children }) {
  // const [stats, setStats] = useState(mainStats);
  // const [stats, setStats] = useState(0);
  const [data, setData] = useState(mainStats);
  return (
    <CharDataContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </CharDataContext.Provider>
  );
}

CharDataProvider.defaultProps = {
  children: null,
};

CharDataProvider.propTypes = {
  children: PropTypes.node,
};

export function useData() {
  // const charData = useContext(CharDataContext);
  const { data, setData } = useContext(CharDataContext);
  return { data, setData };
}
