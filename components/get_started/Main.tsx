/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import { Header } from '../common_components/Header';
import { ScrollView } from 'react-native';
import { Footer } from '../common_components/Footer';

import { GetStarted } from './GetStarted';


function Main(): JSX.Element {
  

  return (
    <> 
      <Header />
      <ScrollView>
        <GetStarted />
        {/* <Footer /> */}
      </ScrollView>
      {/* <BottomNavigation /> */}
    </>
  );
}


export default Main;
