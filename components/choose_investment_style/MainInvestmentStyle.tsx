/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import { Header } from '../common_components/Header';
import { ScrollView } from 'react-native';
import { ButtonsComp } from './ButtonsComp';
import { BottomNavigation } from '../common_components/BottomNavigation';
import { Footer } from '../common_components/Footer';
import { InvestmentStyle } from './InvestmentStyle';


function MainInvestmentStyle({navigation}: {navigation: any}): JSX.Element {
  
  return (
    <> 
      <Header />
      <ScrollView>
        <InvestmentStyle navigation={navigation} />
        <Footer />
      </ScrollView>
      <ButtonsComp navigation={navigation} />
      <BottomNavigation navigation={navigation} />
    </>
  );
}


export default MainInvestmentStyle;
