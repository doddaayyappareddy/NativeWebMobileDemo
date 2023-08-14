/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import { Header } from '../common_components/Header';
import { ScrollView, View } from 'react-native';
import { Footer } from '../common_components/Footer';
import { SignOff } from './SignOff';


function MainSignOff({navigation}: {navigation: any}): JSX.Element {


    return (
        <>
            <Header />
            <ScrollView>
                <SignOff navigation={navigation} />
                <Footer />
            </ScrollView>
        </>
    );
}


export default MainSignOff;