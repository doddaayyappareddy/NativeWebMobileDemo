/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import { Header } from '../common_components/Header';
import { ImageBackground, ScrollView, StyleSheet } from 'react-native';
import { BottomNavigation } from '../common_components/BottomNavigation';
import { Footer } from '../common_components/Footer';
import { Redirection } from './Redirection';

function MainRedirection({ navigation }: { navigation: any }): JSX.Element {

  const { ids, styles } = StyleSheet.create({
    image: {
        width: '100%',
        height: 270,
    },
});

  return (
    <>
      <Header />
      <ScrollView>
          <Redirection navigation={navigation} />
          <Footer />

      </ScrollView>
    </>
  );
}


export default MainRedirection;
