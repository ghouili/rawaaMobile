import React, { useContext } from 'react'

import { MainContext } from '../hooks/ProviderContext';

import BottomTab from './BottomTab';
import AuthNavigation from './AuthNavigation';

const MainNavigation = () => {

    const { loggedIn } = useContext(MainContext);
  return (
    <>
      {loggedIn ? <BottomTab /> : <AuthNavigation />}
    </>
  )
}

export default MainNavigation
