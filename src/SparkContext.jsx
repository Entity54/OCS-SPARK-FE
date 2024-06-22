// ThemeContext.js
import React, { createContext, useState } from 'react';

const SparkContext = createContext();

const SparkProvider = ({ children }) => {

  const [contextAccount, setContextAccount] = useState('');

  const broadcast = (newAccount) => {
    setContextAccount(newAccount);
  };


  return (
    <SparkContext.Provider value={{ contextAccount, broadcast }}>
      {children}
    </SparkContext.Provider>
  );

};

export { SparkContext, SparkProvider };
