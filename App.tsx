/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
// import Main from './components/risk_willingness/main';
import { BottomNavigation } from './components/risk_willingness/BottomNavigation';
import Main from './components/user-enroll/main';
import { GetStarted } from './components/GetStarted';


function App(): JSX.Element {
  

  return (
    <> 
    <GetStarted />
      {/* <Main /> */}
      {/* <BottomNavigation /> */}
    </>
  );
}


export default App;
