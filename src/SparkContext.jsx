// ThemeContext.js
import React, { createContext, useState } from 'react';

// const ThemeContext = createContext();
const SparkContext = createContext();


// const ThemeProvider = ({ children }) => {
const SparkProvider = ({ children }) => {

  const [theme, setTheme] = useState('light');
  const [contextAccount, setContextAccount] = useState('');


  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  const broadcast = (newAccount) => {
    setContextAccount(newAccount);
  };




  return (
    <SparkContext.Provider value={{ theme, toggleTheme, contextAccount, broadcast }}>
    {/* <SparkContext.Provider value={{ theme, toggleTheme}}> */}

      {children}
    </SparkContext.Provider>
  );
};

export { SparkContext, SparkProvider };
