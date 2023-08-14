/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import { Header } from '../common_components/Header';
import { ScrollView } from 'react-native';
import { ButtonsComp } from './ButtonComp';
import { UserEnroll } from './UserEnroll';
import { Footer } from '../common_components/Footer';
import { BottomNavigation } from '../common_components/BottomNavigation';

export const MainUserEnroll = ({navigation}: {navigation: any}) => {

  return (
    <> 
      <Header />
      <ScrollView>
        <UserEnroll navigation={navigation} />
        <Footer />
      </ScrollView>
      <ButtonsComp navigation={navigation} />
      <BottomNavigation navigation={navigation} />
    </>
  );
}


export default MainUserEnroll;
