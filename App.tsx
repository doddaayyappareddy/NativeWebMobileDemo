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
import { ScrollView } from 'react-native';
import { ButtonsComp } from './components/ButtonsComp';
import { BottomNavigation } from './components/BottomNavigation';


function App(): JSX.Element {
  

  return (
    <> 
      <Header />
      <ScrollView>
        <RiskWillingness />
      </ScrollView>
      <ButtonsComp />
      {/* <BottomNavigation /> */}
    </>
  );
}


export default App;
