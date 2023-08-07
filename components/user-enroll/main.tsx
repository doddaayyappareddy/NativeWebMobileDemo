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


function Main(): JSX.Element {
  

  return (
    <> 
      <Header />
      <ScrollView>
        <UserEnroll />
      </ScrollView>
      <ButtonsComp />
      {/* <BottomNavigation /> */}
    </>
  );
}


export default Main;
