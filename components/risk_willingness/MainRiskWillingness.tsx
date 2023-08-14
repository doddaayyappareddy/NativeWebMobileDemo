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
import { Footer } from '../common_components/Footer';
import { BottomNavigation } from '../common_components/BottomNavigation';


function MainRiskWillingness({navigation}: {navigation: any}): JSX.Element {
  
  return (
    <> 
      <Header />
      <ScrollView>
        <RiskWillingness navigation={navigation} />
        <Footer />
      </ScrollView>
      <ButtonsComp navigation={navigation} />
      <BottomNavigation navigation={navigation} />
    </>
  );
}


export default MainRiskWillingness;
