/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import StyleSheet from 'react-native-media-query';
import { UserRegistration } from './components/UserRegistration';
import { Header } from './components/Header';
import { RiskWillingness } from './components/RiskWillingness';


function App(): JSX.Element {
  

  return (
    <> 
      <Header />
      <RiskWillingness />
    </>
  );
}


export default App;
