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
import { Footer } from '../common_components/Footer';


function MainRiskWillingness({navigation}: {navigation: any}): JSX.Element {
  
  return (
    <> 
      <Header />
      <ScrollView>
        <RiskWillingness navigation={navigation} />
        <Footer />
      </ScrollView>
      <ButtonsComp navigation={navigation} />
      {/* <BottomNavigation /> */}
    </>
  );
}


export default MainRiskWillingness;
