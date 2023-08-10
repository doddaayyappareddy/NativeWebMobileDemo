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
import { TermsAlert } from './TermsAlert';


function MainTermsAlert({navigation}: {navigation: any}): JSX.Element {
  
  return (
    <> 

      <ScrollView>
        <TermsAlert navigation={navigation} />

      </ScrollView>

    </>
  );
}


export default MainTermsAlert;
