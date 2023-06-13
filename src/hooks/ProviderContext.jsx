import React, { createContext, useState } from 'react';

const MainContext = createContext();

const ProviderContext = ({ children }) => {

    const [loggedIn, setLoggedIn] = useState(false);

    const values = {loggedIn, setLoggedIn};
  return (
    <MainContext.Provider value={values}>
      {children}
    </MainContext.Provider>
  )
}

export {ProviderContext, MainContext}
