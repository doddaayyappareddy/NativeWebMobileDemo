/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import { Header } from '../common_components/Header';
import { RiskWillingness } from './RiskWillingness';
import { ScrollView } from 'react-native';
import { ButtonsComp } from './ButtonsComp';
import { BottomNavigation } from './BottomNavigation';


function Main(): JSX.Element {
  

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


export default Main;
