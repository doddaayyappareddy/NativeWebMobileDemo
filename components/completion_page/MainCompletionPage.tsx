/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import { Header } from '../common_components/Header';
import { ScrollView } from 'react-native';
import { BottomNavigation } from '../common_components/BottomNavigation';
import { Footer } from '../common_components/Footer';
import { CompletionPage } from './CompletionPage';


function MainCompletionPage({navigation}: {navigation: any}): JSX.Element {
  
  return (
    <> 
      <Header />
      <ScrollView>
        <CompletionPage navigation={navigation} />
        <Footer />
      </ScrollView>

    </>
  );
}


export default MainCompletionPage;
